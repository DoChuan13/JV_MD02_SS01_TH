import React, { Component } from "react";
import Student from "./Student_class.js";

let Student_arr = []

Student_arr[0] = new Student('SV001', 'Nguyễn Văn A', 20, 'Nam')
Student_arr[1] = new Student('SV002', 'Nguyễn Văn B', 21, 'Nữ')
Student_arr[2] = new Student('SV003', 'Nguyễn Văn C', 19, 'Nam')

function RenderStudent() {
    let data = '';
    for (let i = 0; i < Student_arr.length; i++) {
        data += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${Student_arr[i].id}</td>
                    <td>${Student_arr[i].fullName}</td>
                    <td>${Student_arr[i].age}</td>
                    <td>${Student_arr[i].gender}</td>
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
                </tr>
        `
    }
    return DOMParser.parseFromString(data, 'text/html');
}

export default RenderStudent
