export interface IConfigService {
  get(key: string): string
  getOrDef(key: string, def: string): string
  getOrError(key: string): string
}
