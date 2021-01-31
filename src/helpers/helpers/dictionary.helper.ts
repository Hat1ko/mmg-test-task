export class Dictionary<T> {
  private data: { [key: string]: T } = {}

  constructor(array: T[], keyProperty: string = 'id') {
    array.map(el => (this.data[el[keyProperty]] = el))
  }

  public get(key: any): T {
    return this.data[key]
  }

  public getAll(): T[] {
    return Object.values(this.data)
  }

  public getBy(key: string, value: any): T[] {
    return Object.values(this.data).filter(el => el[key] === value)
  }

  public getOneBy(key: string, value: any): T {
    const result = Object.values(this.data).filter(el => el[key] === value)
    return result.length > 0 ? result[0] : null
  }
}
