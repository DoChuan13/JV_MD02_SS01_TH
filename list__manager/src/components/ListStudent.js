import React, { Component } from 'react'
import Student from './Student.js'

class ListStudent extends Component {
    toggleForm = (status) => {
        this.props.controlForm(status);
    }

    inputToForm = (status) => {
        // console.log("Position");
        this.props.inputToForm(status);
    }

    render() {
        let { listStudents } = this.props; //== students = this.props.listStudents
        let { inputToForm } = this.props;//== inputToForm = this.props.inputToForm
        // console.log(listStudents);
        let elementListStudent = listStudents.map((studentinfo, index) => {
            // console.log(studentinfo, index);
            return <Student key={index} controlFormDetail={this.toggleForm} inputToFormDetail={this.inputToForm} studentDetailInfo={studentinfo} stt={index}></Student>
        })
        return (
            <div className="card-body">
                <h3 className="card-title">Danh sách sinh viên</h3>
                <div className="table-responsive pt-3">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Mã sinh viên</th>
                                <th>Tên sinh viên</th>
                                <th>Tuổi</th>
                                <th>Giới tính</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* <RenderStudent></RenderStudent> */}
                            {elementListStudent}
                            {/* <Student ></Student>
                            <Student></Student>
                            <Student></Student> */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListStudent