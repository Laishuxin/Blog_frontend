import { IUser } from "./defineUser";

export interface LoginApi {
  username: string
  password: string
}

export interface LoginApiResponse {
  token: string;
  data: IUser
}
