import { DBL_SERVICE, IAppTestsService } from 'src/core'
import { Inject, Injectable } from '@nestjs/common'
import { DBLService } from 'src/dbl'

@Injectable()
export class AdminTestsService implements IAppTestsService {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService

  async getTestById(id: string): Promise<any> {
    return Promise.resolve(undefined)
  }

  async passTest(id: string, dto: any): Promise<any> {
    return Promise.resolve(undefined)
  }
}
