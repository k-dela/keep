import { Route, Navigate } from "react-router";
import { useAuth } from "../context/Auth";

export default function Protected({children}){
    const {user, loading} = useAuth();

    if(loading === true) return <h1>Loading...</h1>

    if(!user) return <Navigate to='/login'/>

    return children
}