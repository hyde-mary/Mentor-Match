import { API_URL } from "./config";

export async function createUsers(
  firstName: string,
  lastName: string,
  program: string
) {
  const response = await fetch(`${API_URL}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      program,
    }),
  });
  return response.json();
}
