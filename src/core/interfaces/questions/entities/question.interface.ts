import { ITest } from 'src/core'

export interface IQuestion {
  id: string
  name: string
  answer: string
  testId: string

  test?: ITest
}
