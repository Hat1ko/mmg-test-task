import { Inject, Injectable, NotFoundException } from '@nestjs/common'
import { DBL_SERVICE, IAppTestsService, ResultDto, TestDto } from 'src/core'
import { DBLService } from 'src/dbl'
import { TestPassDto } from '../dtos'
import { Dictionary } from 'src/helpers/helpers'

@Injectable()
export class AppTestsService implements IAppTestsService {
  @Inject(DBL_SERVICE)
  private readonly dbl: DBLService

  async getTest(id: string): Promise<TestDto> {
    const test = await this.dbl.testsRepository.findOne(id)

    if (!test) {
      throw new NotFoundException('Test not found')
    }

    test.questions = await this.dbl.questionsRepository.find({
      where: { testId: id },
      select: ['id', 'name'],
    })

    return test
  }

  async passTest(id: string, dto: TestPassDto): Promise<ResultDto> {
    const test = await this.dbl.testsRepository.findOne(id)

    if (!test) {
      throw new NotFoundException('Test not found')
    }

    const questions = await this.dbl.questionsRepository.find({ where: { testId: id } })

    const questionsDictionary = new Dictionary(questions)

    const numOfRightAnswers = dto.items.filter(
      answerItem => answerItem.answer === questionsDictionary.get(answerItem.id).answer,
    ).length

    const result = this.dbl.resultsRepository.create({
      testId: id,
      amountOfRightAnswers: numOfRightAnswers,
    })

    return this.dbl.resultsRepository.save(result)
  }
}
