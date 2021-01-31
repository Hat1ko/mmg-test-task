import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, ValidateNested } from 'class-validator'

export class QuestionCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  answer: string
}

export class TestCreateDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty({ type: QuestionCreateDto, isArray: true })
  @IsNotEmpty()
  @ValidateNested()
  questions: QuestionCreateDto[]
}
