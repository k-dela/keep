import { useAuth } from "../context/Auth"


export default function Home(){

    return (
        <div>
            <h1>Home</h1>

            <div>
                <form>
                    <div>
                     <label htmlFor="title">Title:</label>
                     <input type="text"  name="title"/>
                    </div>
                    <div>
                        <label htmlFor="body">Body:</label>
                        <textarea name="body"  cols="30" rows="10"></textarea>
                    </div>
                    <div>
                        <button>Create</button>
                    </div>
                </form>
            </div>
        </div>
    )
}