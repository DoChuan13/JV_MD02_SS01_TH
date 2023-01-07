import React, { Component } from "react";

class Control extends Component {
    constructor() {
        super();
        this.state = {
            searchData: '',
            sortDir: '',
            sortBy: ''
        }
    }
    addNewStudent = () => {
        let newStudent = {
            studentId: '',
            studentName: '',
            studentAge: '',
            studentGender: '',
            studentDateBirth: '',
            studentPlaceBirth: '',
            studentAddress: '',
        }
        this.props.controlForm(true, "CreateStudent", newStudent);

    }

    setSearchData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(event.target);
        this.setState({
            searchData: value,
        })
    }

    sendSearchData = (event) => {
        this.props.setSearchData(this.state.searchData)
        event.preventDefault()
    }

    selectSort = (event) => {
        let value = event.target.value
        let arrSort = value.split('-')
        this.setState({
            sortDir: arrSort[0],
            sortBy: arrSort[1]
        })
        this.props.setSortData(arrSort[0], arrSort[1])
    }

    render() {
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-3">
                        <button type="button" className="btn btn-primary btn-icon-text" onClick={this.addNewStudent}>
                            Thêm mới sinh viên
                        </button>
                    </div>
                    <div className="col-6">
                        <form className="search-form" action="#">
                            <i className="icon-search" />
                            <input
                                type="search"
                                className="form-control"
                                placeholder="Search Here"
                                title="Search here"
                                name="search"
                                onChange={this.setSearchData}
                            />
                            <button className="btn btn-primary btn-icon-text" onClick={this.sendSearchData}>
                                Tìm kiếm
                            </button>
                        </form>
                    </div>
                    <div className="col-3 d-flex align-items-center">
                        <select className="form-control" onChange={this.selectSort}>
                            <option value="-">Mặc định</option>
                            <option value="studentName-ASC">Tên tăng dần</option>
                            <option value="studentName-DESC">Tên giảm dần</option>
                            <option value="studentAge-ASC">Tuổi tăng dần</option>
                            <option value="studentAge-DESC">Tuổi giảm dần</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default Control