export interface IMemoryCache<T> {
  setItem(key: string, value: T): void
  getItem(key: string): T | undefined
  getAll(): T[]
  removeItem(key: string): void
  clear(): void
  size(): number
}
