import logo from './logo.svg';
import './App.css';
import Control from './components/Control.js'
import ListStudent from './components/ListStudent.js'
import Form from './components/Form.js';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedStudent: {},
      actionName: '',
      isForm: -1,
      sortDir: '',
      sortBy: '',
      searchData: '',
      isToggle: false,
      students: []
    }
  }

  componentWillMount = () => {
    class Student {
      constructor(studentId, studentName, studentAge, studentGender, studentDateBirth, studentPlaceBirth, studentAddress) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.studentAge = studentAge;
        this.studentGender = studentGender;
        this.studentDateBirth = studentDateBirth;
        this.studentPlaceBirth = studentPlaceBirth;
        this.studentAddress = studentAddress

      }
    }
    let intStudentDB = [];
    intStudentDB[0] = new Student("SV001", "Nguyễn Văn Anh", 20, true, "2002-11-20", "Hà Nội", "Hà Nội")
    intStudentDB[1] = new Student("SV002", "Nguyễn Thanh Hà", 19, false, "2003-01-01", "Đà Nẵng", "Đà Nẵng")
    intStudentDB[2] = new Student("SV003", "Nguyễn Văn Cương", 21, true, "2002-11-20", "Quảng Ninh", "Sài Gòn")

    let studentDatabase = JSON.parse(localStorage.getItem('studentDatabase'))
    if (studentDatabase == null) {
      localStorage.setItem('studentDatabase', JSON.stringify(intStudentDB))
      studentDatabase = JSON.parse(localStorage.getItem('studentDatabase'))
    }
    this.setState({
      students: studentDatabase
    })
  }

  // componentWillUpdate = () => {
  //   console.log("componentWillUpdate", this.state.students);
  // }

  componentDidUpdate = () => {
    // console.log("componentDidUpdate", this.state.students);
    localStorage.setItem('studentDatabase', JSON.stringify(this.state.students))
  }

  toggleForm = (status, actionName, selectedStudent) => {
    this.setState({
      isToggle: status,
      actionName: actionName,
      selectedStudent: selectedStudent
    })
  }


  inputInfoForm = (studentId) => {
    for (const key in this.state.students) {
      if (studentId == this.state.students[key].studentId) {
        // console.log(key);
        // return key;
        this.setState({
          isForm: key
        })
      }
    }
  }

  setSearchData = (searchData) => {
    this.setState({
      searchData: searchData,
    })
  }

  setSortData = (sortDir, sortBy) => {
    this.setState({
      sortDir: sortDir,
      sortBy: sortBy
    })
  }

  setNewStudent = (isToggle, newStudent) => {
    this.setState({
      isToggle: isToggle
    })
    this.state.students.push(newStudent)
  }

  updateInfoStudent = (isToggle, studentUpdated, currentStudentId) => {
    let students = this.state.students.map(student => {
      if (student.studentId == currentStudentId) {
        return student = studentUpdated
      }
      else {
        return student;
      }
    })
    this.setState({
      isToggle: isToggle,
      students: students
    })
  }

  deleteInfoStudent = (deletedStudent) => {
    let students = this.state.students.filter(student => {
      if (student.studentId != deletedStudent.studentId) {
        return student
      }
    })
    this.setState({
      students: students
    })
  }

  render() {
    let students = [];
    // Search Data
    if (this.state.searchData != '') {
      this.state.students.forEach(student => {
        if (student.studentName.toLowerCase().includes(this.state.searchData.toLowerCase())) {
          students.push(student);
        }
      })
    }
    else {
      students = [...this.state.students]
    }
    //Sort Data
    if (this.state.sortDir != '') {
      if (this.state.sortDir == 'studentName') {
        if (this.state.sortBy == 'ASC') {
          students.sort((a, b) => (a.studentName > b.studentName) ? 1 : (a.studentName < b.studentName) ? -1 : 0)
        }
        else {
          students.sort((a, b) => (b.studentName > a.studentName) ? 1 : (b.studentName < a.studentName) ? -1 : 0)
        }
      }
      else {
        if (this.state.sortBy == 'ASC') {
          students.sort((a, b) => (a.studentAge - b.studentAge))
        }
        else {
          students.sort((a, b) => (b.studentAge - a.studentAge))
        }
      }
    }
    let elementForm;
    let indexStudent;
    if (this.state.isForm != -1) {
      indexStudent = this.state.isForm;
    }

    if (this.state.isToggle) {
      elementForm = <Form actionName={this.state.actionName} selectedStudent={this.state.selectedStudent} controlForm={this.toggleForm} listStudents={this.state.students} id={indexStudent} setNewStudent={this.setNewStudent} updateInfoStudent={this.updateInfoStudent}></Form>;
    }
    else {
      elementForm = '';
    }


    // console.log(this.state.students);
    return (
      <div className="App">
        <div className="row">
          <div className="col-lg-7 grid-margin stretch-card">
            <div className="card">
              {/* START CONTROL */}
              <Control controlForm={this.toggleForm} controlFormID={this.toggleFormID} setSearchData={this.setSearchData} setSortData={this.setSortData}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent controlForm={this.toggleForm} listStudents={students} deleteInfoStudent={this.deleteInfoStudent}></ListStudent>
              {/* END LIST STUDENT */}
            </div>
          </div>
          {/* START FORM SINH VIEN */}
          {elementForm}
          {/* END FORM SINH VIÊN */}
        </div>
      </div>
    );
  }
}

export default App;
