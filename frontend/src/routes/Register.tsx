import { useState } from "react";
import { createAccount } from "../api/createAccount";

export default function Register() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    
    async function handleRegister(e: React.FormEvent) {
        await createAccount(username, password, email);
    }

    return (
        <div>
            <form onSubmit={handleRegister}>
                <label htmlFor="username">username</label>
                <input 
                id="username" 
                value={username}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
                    setUsername(e.target.value);
                }}
                />
                <br/>
                <label htmlFor="password">password</label>
                <input 
                type="password" 
                id="password" 
                value={password}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
                    setPassword(e.target.value);
                }}
                />
                <br />
                <label htmlFor="email">email</label>
                <input 
                id="email"
                value={email}
                onChange = {(e: React.ChangeEvent<HTMLInputElement>) => {
                    setEmail(e.target.value);
                }}
                />
                <br />
                <button>Create account</button>
            </form>
        </div>
    )
}