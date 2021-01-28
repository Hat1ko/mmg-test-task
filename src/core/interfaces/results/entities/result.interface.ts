import { ITest } from 'src/core'

export interface IResult {
  id: string
  amountOfRightAnswers: number
  testId: string

  test?: ITest
}
