import { useState } from "react"
import supabase from "../supabase/supabase";

export default function Login(){
    const[email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        const { user, session, error } = await supabase.auth.signIn({
            email,
            password
          });
        
        if(error) {
            console.error(error);
        }

        console.log(user);
        console.log(session);
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={login}>
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
                    <button>login</button>
                </div>
            </form>
        </div>
    )
}