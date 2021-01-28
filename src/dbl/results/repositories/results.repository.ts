import { EntityRepository, Repository } from 'typeorm/index'
import { IResultsRepository } from 'src/core'
import { Result } from '../entities'

@EntityRepository(Result)
export class ResultsRepository extends Repository<Result> implements IResultsRepository {}
