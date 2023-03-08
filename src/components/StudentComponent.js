import React, {useState, useEffect} from 'react'
import StudentService from '../services/StudentService';


function StudentComponent() {

    const [students, setStudents] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
   
    

    useEffect(() => {
        getStudents()
    }, [])

    const getStudents = () => {
        StudentService.getStudents().then((response) => {
            setStudents(response.data)
        });
    };

    const deleteStudent = (id) => {
        StudentService.deleteStudent(id).then((response) => {
          getStudents();
        });
      };

   

    const addStudent = () => {
        const newStudent = {
            firstName: firstName,
            lastName: lastName,
            emailId: email
        }
        StudentService.addStudent(newStudent).then(() => {
            getStudents()
            setFirstName('')
            setLastName('')
            setEmail('')
        })
    }

    return (
        <div className = "container">
            
            <h1 className = "text-center"> Students List</h1>
            

            <table className = "table table-striped">
                <thead>
                    <tr>
                        <th> Student Id</th>
                        <th> Student First Name</th>
                        <th> Student Last Name</th>
                        <th> Student Email</th>
                    </tr>

                </thead>
                <tbody>
                    {
                        students.map(
                                student =>
                                <tr key = {student.id}>
                                    <td> {student.id }</td>
                                    <td> {student.firstName }</td>
                                    <td> {student.lastName }</td>    
                                    <td> {student.emailId }</td>

                                    <td>
                                        <button className="btn btn-danger" onClick={() => deleteStudent(student.id)}>Delete</button>
                                    </td>

                                </tr>

                        )
                    }

                </tbody>


            </table>


            <div className="container">
                <h2>Add Student</h2>
                <div className="form-group">
                    <label>First Name:</label>
                    <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Last Name:</label>
                    <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button className="btn btn-primary" onClick={() => addStudent()}>Add Student</button>
            </div>

        </div>
    )
}

export default StudentComponent;
