import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/Auth'
import Protected from './components/Protected'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

import supabase from './supabase/supabase'

export default function App(){
    return (
        <BrowserRouter >
         <AuthProvider>
          <Routes>
            <Route path="/" element={
                <Protected>
                    <Home />
                </Protected>
            }/>
            <Route path="/login" element={ <Login />} />
            <Route path="/signup" element={ <Signup />} />
         </Routes>
        </AuthProvider>
       </BrowserRouter>
    )
}