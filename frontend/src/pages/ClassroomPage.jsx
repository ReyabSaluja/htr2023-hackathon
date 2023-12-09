import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { useParams, Link, useNavigate } from "react-router-dom";
import Draggable from 'react-draggable';

import './ClassroomPage.css';

const ClassroomPage = () => {
	let navigate = useNavigate();

	let classroomId = useParams().id;
	let [classroom, setClassroom] = useState(null);
	let [students, setStudents] = useState([]);

    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getClassroom()
    }, [])

    let getClassroom = async() =>{
        let response = await fetch(`http://127.0.0.1:8000/api/classrooms/${classroomId}`, {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()
		console.log(data)

        if(response.status === 200) {
            setClassroom(data['classroom'])
            setStudents(data['students_classroom'])
        }else if(response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

	// let addStudent = async () => {
    //     let response = await fetch(`http://127.0.0.1:8000/api/classrooms/${classroomId}`, {
    //         method:'GET',
    //         headers:{
    //             'Content-Type':'application/json',
    //             'Authorization':'Bearer ' + String(authTokens.access)
    //         },
	// 		body : JSON.stringify(classroom)
    //     })
    //     let data = await response.json()

    //     if(response.status === 200) {
    //         setClassroom(data)
    //     }else if(response.statusText === 'Unauthorized') {
    //         logoutUser()
    //     }
	// };

	// let updateNote = async () => {
	// 	fetch(`/api/notes/${noteId}/`, {
	// 		method: "PUT",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 		body: JSON.stringify(note),
	// 	});
	// };

	// let deleteNote = async () => {
	// 	fetch(`/api/notes/${noteId}/`, {
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});
	// 	navigate("/");
	// };

	let handleSubmit = async () => {
		if (noteId !== "new" && !note.body) {
			deleteNote();
		} else if (noteId !== "new") {
			updateNote();
		} else if (noteId === "new" && note !== null) {
			createNote();
		}

		navigate("/");
	};

	let handleChange = (e) => {
		setNote((note) => ({ ...note, body: e.target.value }));
	};

	const [draggableControl, setDraggableControl] = useState(false);

	const handleToggle = () => {
		setDraggableControl(!draggableControl);
	};

	console.log(classroom)
	console.log(students)

	return (
		<div className="container">
			<div className="box">
				<div className="section" style={{backgroundColor: "var(--rainbow-red)"}}/>
				<div className="section" style={{backgroundColor: "var(--rainbow-yellow)"}}/>
				<div className="section" style={{backgroundColor: "var(--rainbow-green)"}}/>
				<div className="section" style={{backgroundColor: "var(--rainbow-blue)"}}/>
				<div className="section" style={{backgroundColor: "var(--rainbow-purple)"}}/>

				<Draggable bounds="parent" disabled={!draggableControl}>
					<div className="draggable">Draggable 1</div>
				</Draggable>

				<Draggable bounds="parent" disabled={!draggableControl}>
					<div className="draggable">Draggable 2</div>
				</Draggable>

				<Draggable bounds="parent" disabled={!draggableControl}>
					<div className="draggable">Draggable 3</div>
				</Draggable>
			</div>

			<div className="sidebar">
				<h2>Students</h2>
				{students.map((student, index) => {
					{console.log(student)}
					<p>{student.student.first_name}</p>
				})}
				{/* <button onClick={handleToggle}>Toggle Draggables</button> */}
			</div>
    </div>
	);
};

export default ClassroomPage;