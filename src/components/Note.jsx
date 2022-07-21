export default function Note({ note, deleteNote, handleClick }){
    return (
        <div className='note' onClick={() => handleClick()}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <p>{note.id}</p>
            <button onClick={() => deleteNote(note.id)}>Delete</button>
            <button>Update</button>
        </div>
    )
}