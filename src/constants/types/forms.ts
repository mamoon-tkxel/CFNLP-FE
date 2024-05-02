export interface SIGN_IN_VALUES {
  email: string;
  password: string;
  remember_me_days: null | number;
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

export interface ADMIN_CREATE_COUNTY_PROFILE_VALUES {
  firstName?: string;
  lastName?: string;
  type: string;
  email: string;
  organizationName: string;
  sendInvitation: boolean;
}

export interface ADMIN_CREATE_USER_VALUES {
  firstName?: string;
  lastName?: string;
  type: string;
  email: string;
  sendInvitation: boolean;
}

export interface ASSIGN_GRANT_AMOUNT {
  amount: number;
  sendContact: boolean;
}
