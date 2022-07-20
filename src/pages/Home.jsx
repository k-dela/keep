import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

export default function Home(){
    const [user, setUser] = useState(null);

    useEffect(() => {
        const currentUser = supabase.auth.user();
        console.log(currentUser)
        setUser(currentUser);
    },[]);
    return (
        <div>
            <h1>Home</h1>
            <p>This will be protected, but how?</p>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}