import React, { Component } from 'react'
import feature_img from '../assets/images/feature.jpg'


class FeaturesSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6" style={{ minHeight: 500 }}>
                            <div className="position-relative h-100 rounded overflow-hidden">
                                <img
                                    className="position-absolute w-100 h-100"
                                    src={feature_img}
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 pt-5 pb-lg-5">
                            <div className="feature-text bg-white rounded p-lg-5">
                                <h6 className="text-uppercase">Our Features</h6>
                                <h1 className="mb-4">Why Choose Us</h1>
                                <div className="d-flex mb-4">
                                    <div
                                        className="btn-primary btn-lg-square px-3"
                                        style={{ borderRadius: 50 }}
                                    >
                                        <h5 className="text-secondary m-0">01</h5>
                                    </div>
                                    <div className="ml-4">
                                        <h5>Best Law Practices</h5>
                                        <p className="m-0">
                                            Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                            ipsum ipsum stet ipsum
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex mb-4">
                                    <div
                                        className="btn-primary btn-lg-square px-3"
                                        style={{ borderRadius: 50 }}
                                    >
                                        <h5 className="text-secondary m-0">02</h5>
                                    </div>
                                    <div className="ml-4">
                                        <h5>Efficiency &amp; Trust</h5>
                                        <p className="m-0">
                                            Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                            ipsum ipsum stet ipsum
                                        </p>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div
                                        className="btn-primary btn-lg-square px-3"
                                        style={{ borderRadius: 50 }}
                                    >
                                        <h5 className="text-secondary m-0">03</h5>
                                    </div>
                                    <div className="ml-4">
                                        <h5>Results You Deserve</h5>
                                        <p className="m-0">
                                            Ipsum duo tempor elitr rebum stet magna amet kasd. Ipsum magna
                                            ipsum ipsum stet ipsum
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FeaturesSection