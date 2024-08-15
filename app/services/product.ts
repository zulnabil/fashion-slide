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
  private client: AxiosInstance;

  constructor(baseUrl: string = "/api", cacheDuration: number = 5 * 60 * 1000) {
    super(cacheDuration);
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  private getCacheKey(method: string, url: string): string {
    return `${method}:${url}`;
  }

  private async request<T>({ method, url, useCache = true }: RequestParams) {
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

      // if the request is successful, set the cache first
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
    return this.request<ResponseData<FashionItem[]>>({
      method: "GET",
      url: "/products",
    });
  }

  async getProductById(id: string) {
    return this.request<ResponseData<FashionItem>>({
      method: "GET",
      url: `/products/${id}`,
    });
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

// singleton
export const productService = new ProductService();
