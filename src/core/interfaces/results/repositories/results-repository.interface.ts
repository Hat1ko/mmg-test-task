import { Repository } from 'typeorm/index'
import { Result } from 'src/dbl'

export interface IResultsRepository extends Repository<Result> {}
