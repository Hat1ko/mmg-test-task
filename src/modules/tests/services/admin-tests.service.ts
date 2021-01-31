import { DBL_SERVICE, IAdminTestsService, TestDto } from 'src/core'
import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { DBLService } from 'src/dbl'
import { TestCreateDto } from '../dtos'
import { IPagination, IPaginationList, paginateAndGetMany } from 'src/helpers/helpers'

@Injectable()
export class AdminTestsService implements IAdminTestsService {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService

  async createOne(dto: TestCreateDto): Promise<TestDto> {
    const testToCreate = this.dbl.testsRepository.create({ name: dto.name })
    const testSaved = await this.dbl.testsRepository.save(testToCreate)

    const questionsToCreate = dto.questions.map(question =>
      this.dbl.questionsRepository.create({ ...question, testId: testSaved.id }),
    )
    testSaved.questions = await this.dbl.questionsRepository.save(questionsToCreate)

    return testSaved
  }

  async getAll(pagination: IPagination): Promise<IPaginationList<TestDto>> {
    const query = this.dbl.testsRepository.createQueryBuilder('test')

    return await paginateAndGetMany(query, pagination)
  }

  async getTestByIdWithAnswers(id: string): Promise<TestDto> {
    const test = await this.dbl.testsRepository.findOne(id)

    if (!test) {
      throw new NotFoundException('Test not found')
    }

    test.questions = await this.dbl.questionsRepository.find({
      where: { testId: id },
      select: ['id', 'name', 'answer'],
    })

    return test
  }
}
