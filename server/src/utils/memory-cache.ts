import { IMemoryCache } from './memory-cache.interface'

export default class InMemoryCache<T> implements IMemoryCache<T> {
  private store: Map<string, T>

  constructor() {
    this.store = new Map<string, T>()
  }

  setItem(key: string, value: T): void {
    this.store.set(key, value)
  }

  getItem(key: string): T | undefined {
    return this.store.get(key)
  }

  getAll(): T[] {
    return [...this.store.values()]
  }

  removeItem(key: string): void {
    this.store.delete(key)
  }

  clear(): void {
    this.store.clear()
  }

  size(): number {
    return this.store.size
  }
}
