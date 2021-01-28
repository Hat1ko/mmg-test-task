import { EntityRepository, Repository } from 'typeorm/index'
import { Test } from '../entities'
import { ITestsRepository } from 'src/core'

@EntityRepository(Test)
export class TestsRepository extends Repository<Test> implements ITestsRepository {}
