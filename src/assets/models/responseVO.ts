import { ErrorVO } from './errorVO';

export interface ResponseVO<T> {
    success: boolean;
    errors: ErrorVO[];
    data: T;
    totalRows?: number;
}

export interface ResponseDataVO<T> {
  data: T;
  totalRows?: number;
}
