import { IQuestion } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class QuestionDto implements IQuestion {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  answer: string

  @ApiProperty()
  testId: string
}
