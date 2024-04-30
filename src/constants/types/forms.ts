export interface SIGN_IN_VALUES {
  email: string;
  password: string;
}

export interface ADMIN_CREATE_GRANT_VALUES {
  title: string;
  description?: string;
  type: string;
  amount?: null | number;
  deadlineDate: string;
  sendInvitation: boolean;
  status: boolean;
}
