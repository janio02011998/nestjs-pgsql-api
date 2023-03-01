export abstract class BaseQueryParametersDto {
  sort: 'ASC' | 'DESC';
  page: number;
  limit: number;
}
