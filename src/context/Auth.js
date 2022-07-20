import { createContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext)
}
  
export function AuthProvider({children}){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        const session = supabase.auth.session();

        setUser(session?.user ?? null);
        setLoading(false);

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
              setUser(session?.user ?? null)
              setLoading(false)
            }
          )
      
          return () => {
            listener?.unsubscribe()
          }
    }, []);

    const value = {user};

    return (
        <AuthContext.Provider>
            {!loading && children}
        </AuthContext.Provider>
    )
}