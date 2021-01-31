import { DBL_SERVICE, IStatisticsService } from 'src/core'
import { Inject, Injectable } from '@nestjs/common'
import { DBLService } from 'src/dbl'

@Injectable()
export class StatisticsService implements IStatisticsService {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService

  async getAllResults(pagination: any): Promise<any> {
    return Promise.resolve(undefined)
  }

  async getFinishedTestsResults(pagination: any): Promise<any> {
    return Promise.resolve(undefined)
  }

  async getResultsByTestId(id: string): Promise<any> {
    return Promise.resolve(undefined)
  }
}
