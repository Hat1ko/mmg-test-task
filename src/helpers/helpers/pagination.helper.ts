import { SelectQueryBuilder } from 'typeorm/index'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export interface IPagination {
  limit: number
  page: number
  sortField: string
  sort: string
  skip: number
  searchString?: string
}

export interface IPaginationList<T> {
  items: T[]
  count: number
}

export const paginateAndGetMany = async <T>(
  oldQuery: SelectQueryBuilder<T>,
  pagination: IPagination,
  fieldPrefix = '',
): Promise<IPaginationList<T>> => {
  let query = oldQuery.skip(pagination.skip).take(pagination.limit)

  if (pagination.sortField) {
    const sort: 'ASC' | 'DESC' = pagination.sort === 'ASC' ? 'ASC' : 'DESC'
    query = query.orderBy(fieldPrefix + '.' + pagination.sortField, sort)
  }

  const [items, count] = await query.getManyAndCount()

  return { items, count }
}

export const ReqPagination = createParamDecorator(
  (data: unknown, ctx: ExecutionContext): IPagination => {
    const req = ctx.switchToHttp().getRequest()

    const query = {
      ...(req.query as any),
      page: req.query.page ? req.query.page : 1,
      limit: req.query.limit ? req.query.limit : 20,
    }
    return {
      limit: query.limit,
      page: query.page,
      sortField: query.sortField,
      sort: query.sort,
      skip: query.limit * (query.page - 1),
    } as IPagination
  },
)
