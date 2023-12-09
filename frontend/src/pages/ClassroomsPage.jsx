import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'
import {Link} from 'react-router-dom'
import './ClassroomsPage.css';

const ClassroomsPage = () => {
    let [classrooms, setClassrooms] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getClassrooms()
    }, [])


    let getClassrooms = async() =>{
        let response = await fetch('http://127.0.0.1:8000/api/classrooms/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200) {
            setClassrooms(data)
        }else if(response.statusText === 'Unauthorized') {
            logoutUser()
        }
    }

	console.log(classrooms)

    return (
        <div>
            <h1 className="title">You are logged to the classrooms page!</h1>
    
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                {classrooms.map((classroom, index) => (
                    <div key={index} className="classroom-card">
                        <div className="card-container">
                            <Link to={`/classrooms/${classroom.id}`} className="card-title">
                                {classroom.course_name}
                            </Link>
                            <p className="card-info">Grade: {classroom.grade_level}</p>
                            {/* Check if students exist and then render its length */}
                            {classroom.students && (
                                <p className="card-info">Students: {classroom.students.length}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ClassroomsPage