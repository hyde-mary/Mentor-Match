import { API_URL } from "./config";

export async function deleteUsers(userId: string) {
  await fetch(`${API_URL}/users/${userId}`, {
    method: "DELETE",
  });
}
