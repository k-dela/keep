import { useEffect, useState } from "react";
import { useAuth } from "../context/Auth"
import supabase from "../supabase/supabase";

import Note from "../components/Note";
import NoteForm from "../components/NoteForm";
import NoteModal from "../components/NoteModal";

export default function Home(){
    const {user} = useAuth();

    const [notes, setNotes] = useState([]);
    const[modalOpen, setModalOpen] = useState(false);

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

    const handleClick = () => {
        setModalOpen(true);
        return console.log('You clicked a note')
    }
    return (
        <div className="root-container">
            <h1>Home</h1>

            <NoteForm addNewNote={addNewNote} userId={user.id}/>

            <div className="notes-container">
                {notes && notes.map((note) => {
                    return <Note 
                    key={note.id} 
                    note={note} 
                    deleteNote={deleteNote} 
                    handleClick={handleClick} />
                })}
                
            </div>
            <NoteModal isOpen={modalOpen}  close={() => setModalOpen(false)}/>
        </div>
    )
}