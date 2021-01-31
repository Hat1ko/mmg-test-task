export interface IStatisticsService {
  // TODO: insert type
  getAllResults(pagination: any): Promise<any>
  // TODO: insert type
  getResultsByTestId(id: string): Promise<any>
  // TODO: insert type
  getFinishedTestsResults(pagination: any): Promise<any>
}
