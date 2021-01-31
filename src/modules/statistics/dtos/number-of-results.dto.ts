import { ApiProperty } from '@nestjs/swagger'

export class NumberOfResultsDto {
  @ApiProperty()
  count: number
}
