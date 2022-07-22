import './NoteModal.css'
export default function NoteModal({isOpen}){
    if(isOpen === false) return null;

    return(
        <div className='overlay'>
            <div className='modal-container'>
                <h2>You clicked a note</h2>
                <p>More to be announced</p>
            </div>
        </div>
    )
}