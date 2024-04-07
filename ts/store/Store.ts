export default class Store<T> {
  private m_Items: Map<string, T>;

  constructor(items: Iterable<readonly [string, T]> = []) {
    this.m_Items = new Map<string, T>(items);
  }

  public values(): T[] {
    return Array.from(this.m_Items.values());
  }

  public keys(): string[] {
    return Array.from(this.m_Items.keys());
  }

  public clear(): void {
    this.m_Items.clear();
  }

  public delete(key: string): boolean {
    return this.m_Items.delete(key);
  }

  public set(key: string, item: T): number {
    this.m_Items.set(key, item);
    return this.m_Items.size;
  }

  public get(key: string): T | undefined {
    return this.m_Items.get(key);
  }

  public random(): T | undefined {
    if (this.m_Items.size === 0) {
      return undefined;
    }

    const keys = this.keys();
    const randomKey = keys[Math.floor(Math.random() * this.m_Items.size)];

    return this.m_Items.get(randomKey);
  }
}
