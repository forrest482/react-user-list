import { UserModel } from "./UserModel"

export interface UsersListModel {
    page: number
    per_page: number
    total: number
    total_pages: number
    data: UserModel[]
  }
