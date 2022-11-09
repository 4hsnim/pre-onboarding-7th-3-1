import { CacheData } from "../../types/cache";

export class Cache {
  #CACHE_KEY = "recentlyKeywords";

  set(data: CacheData) {
    return sessionStorage.setItem(this.#CACHE_KEY, JSON.stringify(data));
  }

  get() {
    return sessionStorage.getItem(this.#CACHE_KEY);
  }

  remove() {
    sessionStorage.removeItem(this.#CACHE_KEY);
  }
}
