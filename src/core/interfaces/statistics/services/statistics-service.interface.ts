import { NumberOfResultsDto } from 'src/modules/statistics'

export interface IStatisticsService {
  getAllResultsCount(): Promise<NumberOfResultsDto>
  getFinishedTestsStats(): Promise<NumberOfResultsDto>
  getUnFinishedTestsStats(): Promise<NumberOfResultsDto>
}
