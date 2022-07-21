import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth"
import supabase from "../supabase/supabase";

import Note from "../components/Note";
import NoteForm from "../components/NoteForm";


export default function Home(){
    const {user} = useAuth();

    const [notes, setNotes] = useState([]);

    const addNewNote = (newNote) => {
        const updatedList = [...notes, newNote];
        setNotes(updatedList);
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
    }, [])

    return (
        <div className="root-container">
            <h1>Home</h1>

            <NoteForm addNewNote={addNewNote} userId={user.id}/>

            <div className="notes-container">
                {notes && notes.map((note) => {
                    return <Note key={note.id} note={note} deleteNote={deleteNote} />
                })}
            </div>
        </div>
    )
}