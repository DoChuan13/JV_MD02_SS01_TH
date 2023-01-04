import React, { Component } from "react";
import product_1_img from '../assets/images/product-1.jpg'
import product_2_img from '../assets/images/product-2.jpg'
import product_3_img from '../assets/images/product-3.jpg'


class ServiceSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5" id="service">
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6
                            className="text-uppercase text-primary mb-3"
                            style={{ letterSpacing: 3 }}
                        >
                            Services
                        </h6>
                        <h1 className="font-secondary display-4">What We Cover</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 mb-3">
                            <div className="product-item mb-2">
                                <div className="product-img">
                                    <img className="img-fluid" src={product_1_img} alt="" />
                                    <a
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModalLong"
                                    >
                                        <i className="fa fa-2x fa-plus text-white" />
                                    </a>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h3 className="m-0">Solar System</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="product-item mb-2">
                                <div className="product-img">
                                    <img className="img-fluid" src={product_2_img} alt="" />
                                    <a
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModalLong"
                                    >
                                        <i className="fa fa-2x fa-plus text-white" />
                                    </a>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h3 className="m-0">Wind Turbine</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="product-item mb-2">
                                <div className="product-img">
                                    <img className="img-fluid" src={product_3_img} alt="" />
                                    <a
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal"
                                        data-target="#exampleModalLong"
                                    >
                                        <i className="fa fa-2x fa-plus text-white" />
                                    </a>
                                </div>
                                <div className="bg-secondary text-center p-4">
                                    <h3 className="m-0">Wind Generator</h3>
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