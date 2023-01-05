import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            stId: '',
            stName: '',
            stAge: '',
            stGender: '',
            stDateBirth: '',
            stPlaceBirth: '',
            stAddress: ''
        }
    }
    hideForm = () => {
        this.props.controlForm(false);
    }

    changeState = () => {
        let { listStudents } = this.props;
        let { id } = this.props;
        if (id != undefined) {
            console.log(listStudents[id]);
            this.setState({
                stId: listStudents[id].studentId,
                stName: listStudents[id].studentName,
                stAge: listStudents[id].studentAge,
                stGender: listStudents[id].studentGender,
                stDateBirth: listStudents[id].studentDateBirth,
                stPlaceBirth: listStudents[id].studentPlaceBirth,
                stAddress: listStudents[id].studentAddress,
            })
        }
        console.log(this.state);
    }

    render() {
        let { listStudents } = this.props;
        let { id } = this.props;
        // this.changeState(id);
        console.log(id);
        // console.log(listStudents, id);
        let studentId, studentName, studentAge, studentGender, studentDateBirth, studentPlaceBirth, studentAddress
        if (id === undefined) {
            studentId = '';
            studentName = '';
            studentAge = '';
            studentGender = '';
            studentDateBirth = '';
            studentPlaceBirth = '';
            studentAddress = '';
        }
        else {
            studentId = listStudents[id].studentId;
            studentName = listStudents[id].studentName;
            studentAge = listStudents[id].studentAge;
            studentGender = listStudents[id].studentGender ? "Nam" : "Nữ";
            studentDateBirth = listStudents[id].studentDateBirth;
            studentPlaceBirth = listStudents[id].studentPlaceBirth;
            studentAddress = listStudents[id].studentAddress;
        }


        return (
            <div className="col-5 grid-margin">
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Thông tin sinh viên</h3>
                        <i className="fa-regular fa-circle-xmark fa-xl icon-close" onClick={this.hideForm} />
                        <form className="form-sample">
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Mã sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" onChange={this.changeState} defaultValue={this.state.stId} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" defaultValue={studentName} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" defaultValue={studentAge} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    <select className="form-control" defaultValue={studentGender}>
                                        <option>Nam</option>
                                        <option>Nữ</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    <input className="form-control" placeholder="dd/mm/yyyy" defaultValue={studentDateBirth} />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    <select className="form-control" defaultValue={studentPlaceBirth}>
                                        <option>Hà Nội</option>
                                        <option>TP. Hồ Chí Minh</option>
                                        <option>Đà Nẵng</option>
                                        <option>Quảng Ninh</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    <textarea className="form-control" defaultValue={studentAddress} />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary me-2">
                                Submit
                            </button>
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

export default Form