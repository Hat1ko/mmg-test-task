import { IQuestion, IResult } from 'src/core'

export interface ITest {
  id: string
  name: string

  questions?: IQuestion[]
  results?: IResult[]
}
