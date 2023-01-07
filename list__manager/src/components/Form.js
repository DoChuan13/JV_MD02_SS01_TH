import React, { Component } from "react";

class Form extends Component {
    constructor() {
        super();
        this.state = {
            studentId: '',
            studentName: '',
            studentAge: '',
            studentGender: '',
            studentDateBirth: '',
            studentPlaceBirth: '',
            studentAddress: '',

            currentStudentId: ''
        }
    }
    componentWillMount = () => {
        // console.log(this.props.selectedStudent);//First TIme
        let { selectedStudent } = this.props;
        this.setState({
            studentId: selectedStudent.studentId,
            studentName: selectedStudent.studentName,
            studentAge: selectedStudent.studentAge,
            studentGender: selectedStudent.studentGender,
            studentDateBirth: selectedStudent.studentDateBirth,
            studentPlaceBirth: selectedStudent.studentPlaceBirth,
            studentAddress: selectedStudent.studentAddress,

            currentStudentId: selectedStudent.studentId
        })
    }

    componentWillReceiveProps = (nextProps) => {
        // console.log(this.props.selectedStudent);//Other time
        let { selectedStudent } = nextProps;
        this.setState({
            studentId: selectedStudent.studentId,
            studentName: selectedStudent.studentName,
            studentAge: selectedStudent.studentAge,
            studentGender: selectedStudent.studentGender,
            studentDateBirth: selectedStudent.studentDateBirth,
            studentPlaceBirth: selectedStudent.studentPlaceBirth,
            studentAddress: selectedStudent.studentAddress,

            currentStudentId: selectedStudent.studentId
        })
    }

    handleChange = (event) => {
        let name = event.target.name
        let value = event.target.value
        this.setState({
            [name]: value
        })

        if (name == "studentDateBirth") {
            let today = new Date()
            let birthday = new Date(value)
            this.setState({
                studentAge: today.getFullYear() - birthday.getFullYear(),
                studentDateBirth: value
            })
        }

        if (name == "studentId") {
            let id = value.replace(/ /g, '').toUpperCase()
            // console.log(id);
            this.setState({
                studentId: id
            })
        }

    }



    checkValidateNewStudent = () => {
        let checkStudentId = this.state.studentId != ''
        let checkStudentName = this.state.studentName != ''
        let checkStudentAge = this.state.studentAge != ''
        let checkStudentGender = this.state.studentGender != ''
        let checkStudentDateBirth = this.state.studentDateBirth != ''
        let checkStudentPlaceBirth = this.state.studentPlaceBirth != ''
        let checkStudentAddress = this.state.studentAddress != ''
        // console.log(checkStudentId, checkStudentName, checkStudentAge, checkStudentGender, checkStudentDateBirth, checkStudentPlaceBirth, checkStudentAddress);
        if (checkStudentId, checkStudentName && checkStudentAge && checkStudentGender && checkStudentDateBirth && checkStudentPlaceBirth && checkStudentAddress) {
            return true;
        }
        else {
            return false;
        }
    }


    checkValidateCurrentId = () => {
        let checkID = true;
        this.props.listStudents.forEach(student => {
            if (student.studentId.toUpperCase() == this.state.studentId.toUpperCase()) {
                return checkID = false;
            }
        });
        return checkID
    }

    createNewStudent = (event) => {
        event.preventDefault()

        let checkValidate = this.checkValidateNewStudent();
        if (!checkValidate) {
            window.alert("Vui lòng điền đủ các trường cần nhập")
            return;
        }

        let checkValidateCurrentId = this.checkValidateCurrentId();
        if (!checkValidateCurrentId) {
            window.alert("Mã Sinh viên đã tồn tại, vui lòng thử lại mã khác")
            return;
        }

        let newStudent = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            studentAge: this.state.studentAge,
            studentGender: this.state.studentGender,
            studentDateBirth: this.state.studentDateBirth,
            studentPlaceBirth: this.state.studentPlaceBirth,
            studentAddress: this.state.studentAddress,
        }
        this.props.controlForm(false)
        this.props.setNewStudent(false, newStudent)
    }


    updateInfoStudent = (event) => {
        event.preventDefault()
        let checkcurrentID = this.state.currentStudentId.toLowerCase() != this.state.studentId.toLowerCase();
        let checkValidateCurrentId = this.checkValidateCurrentId();
        let studentUpdated = {
            studentId: this.state.studentId,
            studentName: this.state.studentName,
            studentAge: this.state.studentAge,
            studentGender: this.state.studentGender,
            studentDateBirth: this.state.studentDateBirth,
            studentPlaceBirth: this.state.studentPlaceBirth,
            studentAddress: this.state.studentAddress,
        }
        if (checkcurrentID) {
            if (!checkValidateCurrentId) {
                window.alert("Mã Sinh viên đã tồn tại, vui lòng thử lại mã khác")
                return
            }
            else {
                this.props.updateInfoStudent(false, studentUpdated, this.state.currentStudentId)
                return
            }
        }
        this.props.updateInfoStudent(false, studentUpdated, this.state.currentStudentId)
    }



    hideForm = () => {
        this.props.controlForm(false);
    }



    render() {
        let { actionName } = this.props
        let elementButton = '', elementStudentID, elementStudentName, elementStudentAge, elementStudentGender, elementStudentDateBirth, elementStudentPlaceBirth, elementStudentAddress

        //Base Button
        if (actionName == "CreateStudent") {
            elementButton = <button type="submit" className="btn btn-primary me-2" onClick={this.createNewStudent}>
                Create
            </button>
            elementStudentAge = <input type={"number"} disabled className="form-control" name="studentAge" value={this.state.studentAge} onChange={this.handleChange} />

        }


        else if (actionName == "UpdateStudent") {
            elementButton = <button type="submit" className="btn btn-primary me-2" onClick={this.updateInfoStudent}>
                Update
            </button>
            elementStudentAge = <input type={"number"} disabled className="form-control" name="studentAge" value={this.state.studentAge} onChange={this.handleChange} />

        }

        //Form Input Option

        if (actionName == "CreateStudent" || actionName == "UpdateStudent") {
            elementStudentID = <input type="text" className="form-control" name="studentId" value={this.state.studentId} onChange={this.handleChange} />
            elementStudentName = <input type="text" className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange} />
            // elementStudentAge = <input type={"number"} className="form-control" name="studentAge" value={this.state.studentAge} onChange={this.handleChange} />
            elementStudentGender = <select className="form-control" name="studentGender" value={this.state.studentGender} onChange={this.handleChange}>
                <option value={''}>Khác</option>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
            </select>
            elementStudentDateBirth = <input type={"date"} className="form-control" placeholder="dd/mm/yyyy" name="studentDateBirth" value={this.state.studentDateBirth} onChange={this.handleChange} />
            elementStudentPlaceBirth = <select className="form-control" name="studentPlaceBirth" value={this.state.studentPlaceBirth} onChange={this.handleChange}>
                <option value={"select"}>Lựa chọn</option>
                <option value={"Hà Nội"}>Hà Nội</option>
                <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                <option value={"Đà Nẵng"}>Đà Nẵng</option>
                <option value={"Quảng Ninh"}>Quảng Ninh</option>
            </select>
            elementStudentAddress = <textarea className="form-control" name="studentAddress" value={this.state.studentAddress} onChange={this.handleChange} />
        }

        else {
            elementStudentID = <input type="text" disabled className="form-control" name="studentId" value={this.state.studentId} onChange={this.handleChange} />
            elementStudentName = <input type="text" disabled className="form-control" name="studentName" value={this.state.studentName} onChange={this.handleChange} />
            elementStudentAge = <input type={"number"} disabled className="form-control" name="studentAge" value={this.state.studentAge} onChange={this.handleChange} />
            elementStudentGender = <select disabled className="form-control" name="studentGender" value={this.state.studentGender} onChange={this.handleChange}>
                <option value={''}>Khác</option>
                <option value={true}>Nam</option>
                <option value={false}>Nữ</option>
            </select>
            elementStudentDateBirth = <input type={"date"} disabled className="form-control" placeholder="dd/mm/yyyy" name="studentDateBirth" value={this.state.studentDateBirth} onChange={this.handleChange} />
            elementStudentPlaceBirth = <select disabled className="form-control" name="studentPlaceBirth" value={this.state.studentPlaceBirth} onChange={this.handleChange}>
                <option value={"select"}>Lựa chọn</option>
                <option value={"Hà Nội"}>Hà Nội</option>
                <option value={"TP. Hồ Chí Minh"}>TP. Hồ Chí Minh</option>
                <option value={"Đà Nẵng"}>Đà Nẵng</option>
                <option value={"Quảng Ninh"}>Quảng Ninh</option>
            </select>
            elementStudentAddress = <textarea disabled className="form-control" name="studentAddress" value={this.state.studentAddress} onChange={this.handleChange} />
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
                                    {elementStudentID}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tên sinh viên</label>
                                <div className="col-sm-9">
                                    {elementStudentName}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Tuổi</label>
                                <div className="col-sm-9">
                                    {elementStudentAge}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Giới tính</label>
                                <div className="col-sm-9">
                                    {elementStudentGender}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Ngày sinh</label>
                                <div className="col-sm-9">
                                    {elementStudentDateBirth}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Nơi sinh</label>
                                <div className="col-sm-9">
                                    {elementStudentPlaceBirth}
                                </div>
                            </div>
                            <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Địa chỉ</label>
                                <div className="col-sm-9">
                                    {elementStudentAddress}
                                </div>
                            </div>
                            {elementButton}
                        </form>
                    </div>
                </div >
            </div >
        )
    }
}

export default Form