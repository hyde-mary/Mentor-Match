import { useEffect, useState } from "react";
import "./App.css";
import { deleteUsers } from "./api/deleteUsers";
import { getUsers, TUser } from "./api/getUsers";
import { createUsers } from "./api/createUsers";

function App() {
  // form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [program, setProgram] = useState("");

  // data states
  const [users, setUsers] = useState<TUser[]>([]);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault(); // this is so when it submits, it doesnt refresh the page
    const user = await createUsers(firstName, lastName, program);
    setUsers([...users, user]);
    setFirstName("");
    setLastName("");
    setProgram("");
  }

  async function handleDelete(userId: string) {
    await deleteUsers(userId);
    setUsers(users.filter(user => user._id !== userId));
  }

  useEffect(() => {
    async function fetchUsers() {
      const newUsers = await getUsers();
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <li key={user._id}>
            {user.first_name}
            <button onClick={() => handleDelete(user._id)}>delete</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCreate}>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          value={firstName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setFirstName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          value={lastName}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLastName(e.target.value);
          }}
        />
        <br />
        <label htmlFor="program">Program</label>
        <input
          id="program"
          value={program}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setProgram(e.target.value);
          }}
        />
        <br />
        <button>Create User</button>
      </form>
    </div>
  );
}

export default App;
