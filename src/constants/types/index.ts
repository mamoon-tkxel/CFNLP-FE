export type UserAuth = {
  _id: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type DynamicObject = any;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type ErrorType = any;

export type PaginationType = {
  rowsPerPage: number;
  page: number;
  totalRecords: number;
};
