import axios, { AxiosInstance, AxiosResponse, Method } from "axios";
import HttpError from "./http-error";
import { FashionItem } from "~/app/types/feature";
import { ResponseData } from "~/app/types/generic";
import { CacheService } from "./cache";

interface RequestParams {
  method: Method;
  url: string;
  useCache?: boolean;
}

export class ProductService extends CacheService {
  private client: AxiosInstance | null = null;
  private isValidBaseUrl: boolean = true;

  constructor(baseUrl: string = "/api", cacheDuration: number = 5 * 60 * 1000) {
    super(cacheDuration);

    if (this.validateUrl(baseUrl)) {
      this.client = axios.create({
        baseURL: baseUrl,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      console.error(`Invalid base URL provided: ${baseUrl}`);
      this.isValidBaseUrl = false;
    }
  }

  private validateUrl(url: string): boolean {
    // Simple regex to validate the URL (not foolproof but works for most cases)
    const urlPattern =
      /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/;
    return urlPattern.test(url);
  }

  private getCacheKey(method: string, url: string): string {
    return `${method}:${url}`;
  }

  private async request<T>({
    method,
    url,
    useCache = true,
  }: RequestParams): Promise<T | null> {
    if (!this.isValidBaseUrl || !this.client) {
      console.error("Invalid base URL. Cannot make request.");
      return Promise.resolve(null); // Return null if the base URL is invalid
    }

    const cacheKey = this.getCacheKey(method, url);
    const shouldUseCache = useCache && method === "GET";

    if (shouldUseCache) {
      const cachedData = this.get<T>(cacheKey);
      if (cachedData) {
        return cachedData;
      }
    }

    try {
      const response: AxiosResponse<T> = await this.client.request<T>({
        method,
        url,
      });

      if (shouldUseCache) {
        this.set(cacheKey, response.data);
      }

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new HttpError(
          error.response.data.message,
          error.response.status,
          error.response.data
        );
      }
      throw error;
    }
  }

  async getProducts() {
    const result = await this.request<ResponseData<FashionItem[]>>({
      method: "GET",
      url: "/products",
    });

    return result || { data: [] };
  }

  async getProductById(id: string) {
    const result = await this.request<ResponseData<FashionItem>>({
      method: "GET",
      url: `/products/${id}`,
    });

    return result || { data: null };
  }

  clearCacheFor(
    method: "get" | "post" | "put" | "delete",
    url: string,
    data?: any
  ): void {
    const cacheKey = this.getCacheKey(method, url);
    this.delete(cacheKey);
  }
}

// Singleton
export const productService = new ProductService();
