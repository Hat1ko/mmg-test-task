import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm/index'
import { ITest } from 'src/core'
import { Question, Result } from 'src/dbl'

@Entity('test')
export class Test implements ITest {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @OneToMany(() => Question, question => question.test)
  tests?: Test[]

  @OneToMany(() => Result, result => result.test)
  results?: Result[]
}
