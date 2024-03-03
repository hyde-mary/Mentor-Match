import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // form states
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [program, setProgram] = useState("");

  // data states
  const [users, setUsers] = useState([]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault(); // this is so when it submits, it doesnt refresh the page

    await fetch("http://localhost:5000/users", {
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

    setFirstName("");
    setLastName("");
    setProgram("");
  }

  useEffect(() => {
    async function fetchUsers() {
      const response = await fetch("http://localhost:5000/users");
      const newUsers = await response.json();
      setUsers(newUsers);
    }
    fetchUsers();
  }, []);

  return (
    <div>
      <ul className="users">
        {
          users.map((user) => (
            <li key={user._id}>{user.first_name}</li>
          ))
        }
      </ul>
      <form onSubmit={handleSubmit}>
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
