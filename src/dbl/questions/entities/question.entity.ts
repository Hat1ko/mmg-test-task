import { IQuestion } from 'src/core'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm/index'

@Entity('question')
export class Question implements IQuestion {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  answer: string
}
