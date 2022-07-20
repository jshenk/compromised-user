export interface UserDataResponse {
  name: string;
  email: string;
  password: string;
  isPasswordCompromised: boolean;
  compromisedAccounts?: {
    name: string;
    date: string;
  }[];
}
