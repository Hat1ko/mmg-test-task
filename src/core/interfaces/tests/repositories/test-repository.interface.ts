import { Test } from 'src/dbl'
import { Repository } from 'typeorm/index'

export interface ITestsRepository extends Repository<Test> {}
