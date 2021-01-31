import { ITest } from '../interfaces'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { QuestionDto, ResultDto } from 'src/core'

export class TestDto implements ITest {
  @ApiProperty()
  id: string

  @ApiProperty()
  name: string

  @ApiPropertyOptional({ type: QuestionDto, isArray: true })
  questions?: QuestionDto[]

  @ApiPropertyOptional({ type: ResultDto, isArray: true })
  results?: ResultDto[]
}
