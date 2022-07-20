import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import supabase from './supabase/supabase'


export default function App(){
    const [session, setSession] = useState(null);

    useEffect(() => {
        const currSession = supabase.auth.session();
        //console.log(currentUser)
        setSession(currSession);

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(currSession);
        });
    },[]);

    //console.log(user);

    return (
        <BrowserRouter >
        <Routes>
          <Route path="/" session={session} element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <Signup />} />
        </Routes>
       </BrowserRouter>
    )
}