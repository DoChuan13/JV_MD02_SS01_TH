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
      isForm: -1,
      isToggle: false,
      students: [
        { studentId: "SV001", studentName: "Nguyễn Văn A", studentAge: 20, studentGender: true, studentDateBirth: "20/11/2002", studentPlaceBirth: "Hà Nội", studentAddress: "Hà Nội" },
        { studentId: "SV002", studentName: "Nguyễn Văn B", studentAge: 19, studentGender: false, studentDateBirth: "01/01/2003", studentPlaceBirth: "Đà Nẵng", studentAddress: "Đà Nẵng" },
        { studentId: "SV003", studentName: "Nguyễn Văn C", studentAge: 21, studentGender: true, studentDateBirth: "06/06/2001", studentPlaceBirth: "Quảng Ninh", studentAddress: "Sài Gòn" },
      ],
    }
  }
  toggleForm = (status) => {
    this.setState({
      isToggle: status
    })
  }

  // toggleFormId = () => {
  //   this.setState({
  //     isForm: -1
  //   })
  // }

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



  render() {
    let elementForm;
    let indexStudent;
    if (this.state.isForm != -1) {
      indexStudent = this.state.isForm;
    }

    if (this.state.isToggle) {
      elementForm = <Form controlForm={this.toggleForm} listStudents={this.state.students} id={indexStudent}></Form>;
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
              <Control controlForm={this.toggleForm} controlFormID={this.toggleFormID}></Control>
              {/* END CONTROL */}
              {/* START LIST STUDENT */}
              <ListStudent controlForm={this.toggleForm} inputToForm={this.inputInfoForm} listStudents={this.state.students}></ListStudent>
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
