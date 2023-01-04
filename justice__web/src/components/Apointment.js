import React, { Component } from 'react'


class AppointmentSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="bg-appointment rounded">
                        <div className="row h-100 align-items-center justify-content-center">
                            <div className="col-lg-6 py-5">
                                <div
                                    className="rounded p-5 my-5"
                                    style={{ background: "rgba(55, 55, 63, 0.7)" }}
                                >
                                    <h1 className="text-center text-white mb-4">
                                        Get An Appointment
                                    </h1>
                                    <form>
                                        <div className="form-group">
                                            <input
                                                type="text"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Name"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <input
                                                type="email"
                                                className="form-control border-0 p-4"
                                                placeholder="Your Email"
                                                required="required"
                                            />
                                        </div>
                                        <div className="form-row">
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div
                                                        className="date"
                                                        id="date"
                                                        data-target-input="nearest"
                                                    >
                                                        <input
                                                            type="text"
                                                            className="form-control border-0 p-4 datetimepicker-input"
                                                            placeholder="Select Date"
                                                            data-target="#date"
                                                            data-toggle="datetimepicker"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <div
                                                        className="time"
                                                        id="time"
                                                        data-target-input="nearest"
                                                    >
                                                        <input
                                                            type="text"
                                                            className="form-control border-0 p-4 datetimepicker-input"
                                                            placeholder="Select Time"
                                                            data-target="#time"
                                                            data-toggle="datetimepicker"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <select
                                                className="custom-select border-0 px-4"
                                                style={{ height: 47 }}
                                            >
                                                <option selected="">Select A Service</option>
                                                <option value={1}>Service 1</option>
                                                <option value={2}>Service 1</option>
                                                <option value={3}>Service 1</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button
                                                className="btn btn-primary btn-block border-0 py-3"
                                                type="submit"
                                            >
                                                Get An Appointment
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AppointmentSection