import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useParams, Link, useNavigate } from "react-router-dom";
import Draggable from "react-draggable";

import "./ClassroomPage.css";

const ClassroomPage = () => {
	let navigate = useNavigate();

	let classroomId = useParams().id;
	let [classroom, setClassroom] = useState(null);
	let [students, setStudents] = useState([]);
	let [newStudentName, setNewStudentName] = useState('');

	let { authTokens, logoutUser } = useContext(AuthContext);

	useEffect(() => {
		getClassroom();
	}, []);

	let getClassroom = async () => {
		let response = await fetch(
			`http://127.0.0.1:8000/api/classrooms/${classroomId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + String(authTokens.access),
				},
			}
		);
		let data = await response.json();
		console.log(data);

		if (response.status === 200) {
			setClassroom(data["classroom"]);
			setStudents(data["students_classroom"]);
		} else if (response.statusText === "Unauthorized") {
			logoutUser();
		}
	};

	let handleAddStudent = async () => {
		let response = await fetch(
			`http://127.0.0.1:8000/api/classrooms/${classroomId}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					Authorization: "Bearer " + String(authTokens.access),
				},
				body: JSON.stringify(classroom),
			}
		);
		let data = await response.json();

		if (response.status === 200) {
			setClassroom(data);
		} else if (response.statusText === "Unauthorized") {
			logoutUser();
		}
	};

	let giveFeedback = async (student_name, reason, value) => {
		fetch(`http://127.0.0.1:8000/api/classrooms/${classroomId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify("reason"),
		});
	};

	// let deleteNote = async () => {
	// 	fetch(`/api/notes/${noteId}/`, {
	// 		method: "DELETE",
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});
	// 	navigate("/");
	// };

	const [draggableControl, setDraggableControl] = useState(false);

	const handleToggle = () => {
		setDraggableControl(!draggableControl);
	};

	const [startY, setStartY] = useState(0);
	const [deltaY, setDeltaY] = useState(0);

	const handleDragStart = (e, data) => {
		// Save the initial mouse position
		setStartY(data.y);
	};

	const handleDrag = (e, data) => {
		// Calculate custom delta values
		const HEIGHT = 676;

		const newDeltaY = data.y - startY;

		// Update delta values in state
		setDeltaY(newDeltaY);

		giveFeedback(data.note.id, Number(newDeltaY / HEIGHT));
		console.log(e, data);

		Number(newDeltaY / HEIGHT);
	};

	return (
		<div className="container">
			<div className="box">
				<div
					className="section"
					style={{ backgroundColor: "var(--rainbow-red)" }}
				/>
				<div
					className="section"
					style={{ backgroundColor: "var(--rainbow-yellow)" }}
				/>
				<div
					className="section"
					style={{ backgroundColor: "var(--rainbow-green)" }}
				/>
				<div
					className="section"
					style={{ backgroundColor: "var(--rainbow-blue)" }}
				/>
				<div
					className="section"
					style={{ backgroundColor: "var(--rainbow-purple)" }}
				/>

				{students.map((student, index) => (
					<Draggable
						bounds="parent"
						disabled={!draggableControl}
						onStart={handleDragStart}
						onStop={handleDrag}
					>
						<div id={student.id} className="draggable">
							{student.student.first_name}
						</div>
					</Draggable>
				))}
			</div>

			<div className="sidebar">
				<h2>Students</h2>

				{students.map((student, index) => (
					<button id={student.id} className="student" onClick={handleToggle}>
						{student.student.first_name} {student.student.last_name}
					</button>
				))}
				<input 
                    type="text" 
                    placeholder="New Student Name" 
                    value={newStudentName}
                    onChange={(e) => setNewStudentName(e.target.value)}
                    className="student-input"
                />
                <button 
                    onClick={handleAddStudent} 
                    className="add-student-button"
                >
                    Add Student
                </button>
			</div>
		</div>
	);
};

export default ClassroomPage;
