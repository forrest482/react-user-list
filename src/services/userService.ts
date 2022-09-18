import http from "./httpService";
import { UsersListModel } from "../models/UsersListModel";

const baseURL = "https://reqres.in/api";

export const userService = {
  getUsers: async (page: number) =>{
    try {
      const { data } = await http.get<UsersListModel>(`${baseURL}/users?page=${page}`);
      return data;
    } catch (error) {
      console.log('unexpected error: ', error);
    }
  }
}

