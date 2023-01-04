import React, { Component } from "react";

function Student(props) {
    return (
        <tr>
            <td>{props.no}</td>
            <td>{props.id}</td>
            <td>{props.fullName}</td>
            <td>{props.age}</td>
            <td>{props.gender}</td>
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
    )
}

export default Student