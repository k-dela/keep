import '../css/Note.css';
export default function Note({ note, deleteNote, handleClick }){
    return (
        <div className='note' onClick={(e) =>{
            //console.log(e.target.tagName)
            if(e.target.tagName != 'BUTTON'){
                handleClick(note)
            }
            }}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <p>{note.id}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button>Update</button>
        </div>
    )
}