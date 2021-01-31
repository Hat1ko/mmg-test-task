import { ITest } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'
import { QuestionDto, ResultDto } from 'src/core'

export class TestDto implements ITest {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiProperty()
  questions?: QuestionDto[]

  @ApiProperty()
  results?: ResultDto[]
}
