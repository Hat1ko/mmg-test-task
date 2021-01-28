import { EntityRepository, Repository } from 'typeorm/index'
import { IQuestionsRepository } from 'src/core'
import { Question } from 'src/dbl'

@EntityRepository(Question)
export class QuestionsRepository extends Repository<Question> implements IQuestionsRepository {}
