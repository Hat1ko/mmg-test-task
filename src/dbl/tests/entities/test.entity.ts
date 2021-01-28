import { ITest } from 'src/core'
import { Entity } from 'typeorm/index'

@Entity('test')
export class Test implements ITest {
  id: string
  name: string
}
