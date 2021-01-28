import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index'
import { IResult } from 'src/core'
import { Test } from 'src/dbl'

@Entity('result')
export class Result implements IResult {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  amountOfRightAnswers: number

  @Column()
  testId: string

  @JoinColumn({ name: 'testId' })
  @ManyToOne(() => Test)
  test?: Test
}
