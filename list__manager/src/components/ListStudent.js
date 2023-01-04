import React, { Component } from 'react'
import Student from './Student.js'
import RenderStudent from './Student_arr.js'

class ListStudent extends Component {
    render() {
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
                            <Student no="1" id="SV001" fullName="Nguyễn Văn A" age="20" gender="Nam"></Student>
                            <Student no="2" id="SV002" fullName="Nguyễn Văn B" age="21" gender="Nữ"></Student>
                            <Student no="3" id="SV003" fullName="Nguyễn Văn C" age="19" gender="Nam"></Student>

                            {/* <tr>
                                <td>2</td>
                                <td>SV002</td>
                                <td>Nguyễn Văn B</td>
                                <td>21</td>
                                <td>Nữ</td>
                                <td>
                                    <div className="template-demo">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-icon-text"
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-icon-text"
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
                            </tr> */}
                            {/* <tr>
                                <td>3</td>
                                <td>SV003</td>
                                <td>Nguyễn Văn C</td>
                                <td>19</td>
                                <td>Nam</td>
                                <td>
                                    <div className="template-demo">
                                        <button
                                            type="button"
                                            className="btn btn-danger btn-icon-text"
                                        >
                                            Xem
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-warning btn-icon-text"
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
                            </tr> */}
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListStudent