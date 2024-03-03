import { API_URL } from "./config";

export async function createAccount(
  username: string,
  password: string,
  email: string
) {
  const response = await fetch(`${API_URL}/accounts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: username,
      password: password,
      email
    }),
  });
  return response.json();
}
