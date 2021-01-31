import { IResult } from '../interfaces'
import { ApiProperty } from '@nestjs/swagger'

export class ResultDto implements IResult {
  @ApiProperty()
  id: string

  @ApiProperty()
  amountOfRightAnswers: number

  @ApiProperty()
  testId: string
}
