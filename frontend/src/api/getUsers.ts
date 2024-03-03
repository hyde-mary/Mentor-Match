import { API_URL } from "./config";

export type TUser = {
  _id: string;
  first_name: string;
  last_name: string;
  program: string;
};

export async function getUsers(): Promise<TUser[]> {
  const response = await fetch(`${API_URL}/users`);
  return response.json();
}
