import { useEffect, useState } from "react";
import supabase from "../supabase/supabase";

export default function Home({user}){
    console.log(user);
    return (
        <div>
            <h1>Home</h1>
            <p>This will be protected, but how?</p>

        </div>
    )
}