import React, { Component } from "react";



class FooterSection extends Component {
    render() {
        return (
            <div>
                <div
                    className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5"
                    style={{ marginTop: 90 }}
                >
                    <div className="row pt-5">
                        <div className="col-12 mb-4 px-4">
                            <div
                                className="row mb-5 p-4"
                                style={{ background: "rgba(256, 256, 256, 0.05)" }}
                            >
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5
                                            className="text-primary text-uppercase mb-2"
                                            style={{ letterSpacing: 5 }}
                                        >
                                            Our Office
                                        </h5>
                                        <p className="mb-4 m-md-0">HH4, Song Da</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5
                                            className="text-primary text-uppercase mb-2"
                                            style={{ letterSpacing: 5 }}
                                        >
                                            Email Us
                                        </h5>
                                        <p className="mb-4 m-md-0">info@example.com</p>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-md-center">
                                        <h5
                                            className="text-primary text-uppercase mb-2"
                                            style={{ letterSpacing: 5 }}
                                        >
                                            Call Us
                                        </h5>
                                        <p className="m-0">+012 345 6789</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-12">
                            <div className="row">
                                <div className="col-md-6 mb-5">
                                    <p>
                                        Et et amet ut elitr ipsum sit dolor dolor dolore. Sit accusam
                                        elitr ut diam sit rebum. Eirmod duo kasd diam vero labore sea, est
                                        et et lorem ut at erat, gubergren ipsum et ipsum elitr et rebum
                                        rebum
                                    </p>
                                    <div className="d-flex justify-content-start mt-4">
                                        <a
                                            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                                            href="#"
                                        >
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                                            href="#"
                                        >
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-outline-light btn-lg-square mr-2"
                                            href="#"
                                        >
                                            <i className="fab fa-linkedin-in" />
                                        </a>
                                        <a
                                            className="btn btn-lg btn-outline-light btn-lg-square"
                                            href="#"
                                        >
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-5">
                                    <h5
                                        className="text-primary text-uppercase mb-4"
                                        style={{ letterSpacing: 5 }}
                                    >
                                        Our Products
                                    </h5>
                                    <div className="d-flex flex-column justify-content-start">
                                        <a className="text-white btn-scroll mb-2" href="#service">
                                            <i className="fa fa-angle-right mr-2" />
                                            Solar System
                                        </a>
                                        <a className="text-white btn-scroll mb-2" href="#service">
                                            <i className="fa fa-angle-right mr-2" />
                                            Wind Turbine
                                        </a>
                                        <a className="text-white btn-scroll mb-2" href="#service">
                                            <i className="fa fa-angle-right mr-2" />
                                            Wind Generator
                                        </a>
                                        <a className="text-white btn-scroll mb-2" href="#service">
                                            <i className="fa fa-angle-right mr-2" />
                                            Solar Energy
                                        </a>
                                        <a className="text-white btn-scroll" href="#service">
                                            <i className="fa fa-angle-right mr-2" />
                                            Solar Panel
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-12 mb-5">
                            <h5
                                className="text-primary text-uppercase mb-4"
                                style={{ letterSpacing: 5 }}
                            >
                                Newsletter
                            </h5>
                            <p>
                                Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum
                                sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod
                                sea justo no lorem est diam
                            </p>
                            <div className="w-100">
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className="form-control border-light"
                                        style={{ padding: 30 }}
                                        placeholder="Your Email Address"
                                    />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary px-4">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="container-fluid bg-dark text-white text-center border-top py-4 px-sm-3 px-md-5"
                    style={{ borderColor: "rgba(256, 256, 256, 0.05) !important" }}
                >
                    <p className="m-0 text-white">
                        © <a href="#">Domain Name</a>. All Rights Reserved. Designed by
                    </p>
                </div>
            </div>
        )
    }
}

export default FooterSection