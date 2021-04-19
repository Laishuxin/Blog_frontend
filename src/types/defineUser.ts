export enum UserAuth {
  ADMIN = 1,
  USER = 2,
  FRIEND = 3,
  OTHER = 4,
}

export interface IUser {
  userId: string
  createAt: string
  updateAt: string
  auth: UserAuth
  email: string
  username: string
  nickname: string
  avatar: string | null
}
