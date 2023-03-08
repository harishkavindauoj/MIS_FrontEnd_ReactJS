import axios from 'axios';

const STUDENT_API_BASE_URL = 'http://localhost:8080/api/v1/students';

class StudentService {
    getStudents() {
        return axios.get(STUDENT_API_BASE_URL);
    }

    addStudent(student) {
        return axios.post(STUDENT_API_BASE_URL, student);
    }

    deleteStudent(studentId) {
        return axios.delete(STUDENT_API_BASE_URL + '/' + studentId);
    }
}


export default new StudentService();
