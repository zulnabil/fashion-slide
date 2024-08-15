interface CacheItem<T> {
  data: T;
  expiry: number;
}

export class CacheService {
  private cache: Map<string, CacheItem<any>>;
  private defaultDuration: number;

  constructor(defaultDuration: number = 5 * 60 * 1000) {
    this.cache = new Map();
    this.defaultDuration = defaultDuration; // Default cache duration in milliseconds (5 minutes)
  }

  set<T>(key: string, data: T, duration?: number): void {
    const expiry = Date.now() + (duration || this.defaultDuration);
    this.cache.set(key, { data, expiry });
  }

  get<T>(key: string): T | null {
    const item = this.cache.get(key);
    if (item && Date.now() < item.expiry) {
      return item.data as T;
    }
    this.cache.delete(key);
    return null;
  }

  has(key: string): boolean {
    return this.get(key) !== null;
  }

  delete(key: string): void {
    this.cache.delete(key);
  }

  clear(): void {
    this.cache.clear();
  }
}
