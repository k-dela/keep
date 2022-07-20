import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/Auth'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import supabase from './supabase/supabase'

export default function App(){
    return (
        <BrowserRouter >
         <AuthProvider>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/login" element={ <Login />} />
            <Route path="/signup" element={ <Signup />} />
         </Routes>
        </AuthProvider>
       </BrowserRouter>
    )
}