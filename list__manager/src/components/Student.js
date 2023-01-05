import React, { Component } from "react";

class Student extends Component {
    toggleFormDetail = () => {
        this.props.controlFormDetail(true);
    }
    getInfoStudent = (id) => {
        // this.props.controlFormDetail(true);
        // this.toggleFormDetail();
        this.toggleFormDetail()
        this.props.inputToFormDetail(id);
        // console.log(props, studentDetailInfo.studentId);
    }


    render() {
        let { studentDetailInfo } = this.props;//== studentDetailInfo = this.props.studentDetailInfo
        // console.log(stt);
        return (
            <tr>
                <td>{this.props.stt + 1}</td>
                <td>{studentDetailInfo.studentId}</td>
                <td>{studentDetailInfo.studentName}</td>
                <td>{studentDetailInfo.studentAge}</td>
                <td>{studentDetailInfo.studentGender ? "Nam" : "Nữ"}</td>
                <td>
                    <div className="template-demo">
                        <button
                            type="button"
                            className="btn btn-danger btn-icon-text" onClick={() => this.getInfoStudent(studentDetailInfo.studentId, this.toggleFormDetail)}
                        >
                            Xem
                        </button>
                        <button
                            type="button"
                            className="btn btn-warning btn-icon-text" onClick={this.toggleFormDetail}
                        >
                            Sửa
                        </button>
                        <button
                            type="button"
                            className="btn btn-success btn-icon-text"
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