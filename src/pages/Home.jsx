import { useAuth } from "../context/Auth"


export default function Home(){
    const {user} = useAuth();
    return (
        <div>
            <h1>Home</h1>
            <p>This will be protected, but how?</p>
            <p>{JSON.stringify(user)}</p>
        </div>
    )
}