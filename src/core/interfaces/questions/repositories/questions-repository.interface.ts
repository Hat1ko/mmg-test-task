import { Question } from 'src/dbl'
import { Repository } from 'typeorm/index'

export interface IQuestionsRepository extends Repository<Question> {}
