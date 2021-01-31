import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AnswerQuestionDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer: string
}

export class TestPassDto {
  @ApiProperty()
  @IsNotEmpty()
  @ApiProperty({ type: AnswerQuestionDto, isArray: true })
  @ValidateNested()
  items: AnswerQuestionDto[]
}
