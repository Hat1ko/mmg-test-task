import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm/index'
import { IQuestion } from 'src/core'
import { Test } from 'src/dbl'

@Entity('question')
export class Question implements IQuestion {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  answer: string

  @Column()
  testId: string

  @JoinColumn({ name: 'testId' })
  @ManyToOne(() => Test)
  test?: Test
}
