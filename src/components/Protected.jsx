import { Route, useNavigate } from "react-router";
import { useAuth } from "../context/Auth";

export default function Protected({children}){
    const navigate = useNavigate();
    const {user} = useAuth();

    if(!user) navigate('/login');

    return children
}