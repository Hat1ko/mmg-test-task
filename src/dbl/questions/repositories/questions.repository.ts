import { EntityRepository, Repository } from 'typeorm/index'
import { IQuestionsRepository } from 'src/core'
import { Question } from '../entities'

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> implements IQuestionsRepository {}
