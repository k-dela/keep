import { useState } from "react"

export default function Signup(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signup = async (e) => {
        e.preventDefault();
        console.log(email, password);
    }

    return (
        <div>
            <h1>Signup</h1>
            <form onSubmit={signup}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" 
                    name="email" 
                    id="email" 
                    required
                    onInput={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" 
                    name="password" 
                    id="password"
                    required
                    minLength="6"
                    onInput={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <button>Signup</button>
                </div>
            </form>
        </div>
    )
}