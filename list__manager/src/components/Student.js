import React, { Component } from "react";

class Student extends Component {

    toggleFormDetail = () => {
        this.props.controlFormDetail(true,);
        this.setState({
            isToggle: true
        })
    }
    updateInfoStudent = (studentDetailInfo) => {
        this.props.controlFormDetail(true, "UpdateStudent", studentDetailInfo);
    }
    viewInfoStudent = (studentDetailInfo) => {
        this.props.controlFormDetail(true, "", studentDetailInfo);
    }

    deleteInfoStudent = (studentDetailInfo) => {
        let checkconfirm = window.confirm("Bạn có chắc muốn xóa sinh viên này không?")
        if (checkconfirm) {
            this.props.deleteInfoStudentDetail(studentDetailInfo);
        }
    }

    render() {
        let { studentDetailInfo } = this.props;//== studentDetailInfo = this.props.studentDetailInfo
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{studentDetailInfo.studentId}</td>
                <td>{studentDetailInfo.studentName}</td>
                <td>{studentDetailInfo.studentAge}</td>
                <td>{studentDetailInfo.studentGender.toString() == "true" ? "Nam" : (studentDetailInfo.studentGender.toString() == "false" ? "Nữ" : "Khác")}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text"
                            onClick={() => this.viewInfoStudent(studentDetailInfo)}
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text"
                            onClick={() => this.updateInfoStudent(studentDetailInfo)}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
                            onClick={() => this.deleteInfoStudent(studentDetailInfo)}
                        >
                            Xóa
                        </button>
                    </div>
                </td>
            </tr>
        )
    }
}

export default Student