import { createContext, useEffect, useState ,useContext } from "react";
import supabase from "../supabase/supabase";

const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
}
  
export function AuthProvider({children}){
    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const session = supabase.auth.session();
        setUser(session?.user || null);
        setLoading(false);

        const auth = supabase.auth.onAuthStateChange(
             (event, session) => {
              if(event === 'SIGNED_IN'){
                setUser(session.user);
                setLoading(false);
              }else if(event === 'SIGNED_OUT'){
                setUser(null);
              }
            }
          )
      
          return () => auth.data.unsubscribe();
    }, []);

    const value = {user, loading};

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}