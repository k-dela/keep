import { Route, Navigate } from "react-router";
import { useAuth } from "../context/Auth";

export default function Protected({children}){
    const {user} = useAuth();

    if(!user){
        return <Navigate to="/login"/>
    }

    return children
}