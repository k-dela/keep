import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth"
import supabase from "../supabase/supabase";

import Note from "../components/Note";


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

    const deleteNote = async (noteId) => {
        if(window.confirm('You sure about this?')){
            const {data, error} = await supabase.from('Note').delete().match({id: noteId});
            if(error) console.error(error);
            const newNotes = notes.filter((note) => note.id != noteId);
            setNotes(newNotes);
        }
    }

    useEffect(() => {
        const fetchNotes = async () => {
            const {data, error} = await supabase.from('Note').select();
            
            if(error) console.error(error);

            setNotes(data);
        }

        fetchNotes();
    }, [notes])

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
                    return <Note key={note.id} note={note} deleteNote={deleteNote} />
                })}
            </div>
        </div>
    )
}