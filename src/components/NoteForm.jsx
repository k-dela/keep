import { useState } from "react";
import supabase from "../supabase/supabase";

export default function NoteForm({ addNewNote, userId }){
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const createNoteInDb = async (e) => {
        e.preventDefault();

        console.log(title, body);

        const {data, error} = await supabase.from('Note').insert([{title,body,user_id: userId}]);
        
        if(error) console.error(error);
        const newNote = data[0];

        addNewNote(newNote);
    }

    return (
        <div>
            <p>Note form</p>
        <form onSubmit={createNoteInDb}>
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
    )
}