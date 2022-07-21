import { useState } from "react";
import { useAuth } from "../context/Auth"
import supabase from "../supabase/supabase";


export default function Home(){
    const {user} = useAuth();

    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createNote = async (e) => {
        e.preventDefault();

        console.log(title, body);
        const user_id = user.id;
        //console.log(author);
        const {data, error} = await supabase.from('Note').insert([{title,body,user_id}]);
        const newNote = data[0];
        if(error) console.error(error);
        
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
    }

    return (
        <div>
            <h1>Home</h1>
            <p>{JSON.stringify(user)}</p>

            <div>
                <form onSubmit={createNote}>
                    <div>
                     <label htmlFor="title">Title:</label>
                     <input type="text"
                     name="title"
                     onInput={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor="body">Body:</label>
                        <textarea name="body"
                        cols="30"
                        rows="10"
                        onInput={(e) => setBody(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>

            <div>
                {notes && notes.map((note) => {
                    return (
                        <div key={note.id}>
                            <h2>{note.title}</h2>
                            <p>{note.body}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}