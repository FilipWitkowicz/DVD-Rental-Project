import { useEffect, useState } from "react";

const SERVER_URL = "http://127.0.0.1:8000";

export function PrintNotes() {

    const [notes, setNotes] = useState([]);

    useEffect(() => {
        const requestOptions = {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        };

        fetch(SERVER_URL + "/api/notes", requestOptions)
          .then((response) => response.json())
          .then((newNotes) => setNotes(newNotes));
    }, []);
    
    return (
        <div style={{padding:"20px"}}>
            <h1>Notes</h1>
            <br />
            <ul>
                {notes.map((note) => ( 
                    <li key={note.id}>
                        id: {note.id} <br />
                        body: {note.body} <br />
                        created: {note.created} <br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
