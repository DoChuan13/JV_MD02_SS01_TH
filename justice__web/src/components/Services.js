import React, { Component } from 'react'



class ServiceSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-3">
                            <h6 className="text-uppercase">Our Practice</h6>
                            <h1 className="mb-4">Our Practice Areas</h1>
                            <p>
                                Invidunt lorem justo clita. Erat lorem labore ea, justo dolor lorem
                                ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed
                                sed diam. Ea et erat ut sed diam sea ipsum
                            </p>
                            <a href="" className="btn btn-primary mt-2">
                                More Services
                            </a>
                        </div>
                        <div className="col-lg-9 pt-5 pt-lg-0">
                            <div className="bg-primary rounded" style={{ height: 200 }} />
                            <div
                                className="owl-carousel service-carousel position-relative"
                                style={{ marginTop: "-100px", padding: "0 30px" }}
                            >
                                <div className="d-flex flex-column align-items-center text-center bg-white rounded pt-4">
                                    <div className="icon-box bg-secondary text-primary mt-2 mb-4">
                                        <i className="fa fa-2x fa-landmark" />
                                    </div>
                                    <h5 className="mb-4 px-4">Civil Law</h5>
                                    <p className="m-0">
                                        Takim stet justo elitr sea eirmod vero ipsum. Sed Stet clita sit
                                        duo dolor stet at at. Tempor dolor sit ipsum
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceSection