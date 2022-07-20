import { createContext, useEffect, useState } from "react";
import supabase from "../supabase/supabase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
  
export function AuthProvider({children}){
    const [user, setUser] = useState();

    useEffect(() => {
        const session = supabase.auth.session();

        setUser(session?.user ?? null);

        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
              setUser(session?.user ?? null)
            }
          )
      
          return () => {
            listener?.unsubscribe()
          }
    }, []);

    const value = {user};

    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}