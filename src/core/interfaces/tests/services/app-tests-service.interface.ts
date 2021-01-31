export interface IAppTestsService {
  // TODO: insert type
  getTestById(id: string): Promise<any>
  // TODO: insert type
  passTest(id: string, dto: any): Promise<any>
}
