export default function Note({ note }){
    return (
        <div className='note'>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <button>Delete</button>
        </div>
    )
}