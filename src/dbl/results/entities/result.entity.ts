import { IResult } from 'src/core'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index'

@Entity('result')
export class Result implements IResult {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  amountOfRightAnswers: number
}
