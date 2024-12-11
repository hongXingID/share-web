declare namespace Global {
  type ResponsePageResult<T> = ResponseData<ResponsePage<T>>;

  interface ResponsePage<T = Record<string, string>> {
    current?: number;
    pageSize?: number;
    total?: number;
    list?: Array<T>;
  }

  interface ResponseData<T = string> {
    result?: boolean;
    code?: string;
    data?: T;
  }
}
