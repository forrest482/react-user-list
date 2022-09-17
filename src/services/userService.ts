import http from "./httpService";
import { IUsersList } from "../models/IUsersList";

const baseURL = "https://reqres.in/api";

export async function getUsers(page: number) {
  try {
    const { data } = await http.get<IUsersList>(`${baseURL}/users?page=${page}`);
    return data;
  } catch (error) {
    console.log('unexpected error: ', error);
  }
}

