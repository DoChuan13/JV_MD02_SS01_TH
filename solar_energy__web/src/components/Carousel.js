import React, { Component } from "react";
import carousel_1_img from '../assets/images/carousel-1.jpg'
import carousel_2_img from '../assets/images/carousel-2.jpg'

class CarouselSection extends Component {
    render() {
        return (
            <div className="container-fluid p-0 mb-5 pb-5" id="home">
                <div
                    id="header-carousel"
                    className="carousel slide carousel-fade"
                    data-ride="carousel"
                >
                    <div className="carousel-inner">
                        <div
                            className="carousel-item position-relative active"
                            style={{ height: "100vh", minHeight: 400 }}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={carousel_1_img}
                                style={{ objectFit: "cover" }}
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4
                                        className="text-white text-uppercase mb-4"
                                        style={{ letterSpacing: 3 }}
                                    >
                                        Solar Energy
                                    </h4>
                                    <h3 className="display-2 font-secondary text-white mb-4">
                                        Innovative Solar Solution For Home
                                    </h3>
                                    <a
                                        className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                                        href="#contact"
                                    >
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div
                            className="carousel-item position-relative"
                            style={{ height: "100vh", minHeight: 400 }}
                        >
                            <img
                                className="position-absolute w-100 h-100"
                                src={carousel_2_img}
                                style={{ objectFit: "cover" }}
                            />
                            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                                <div className="p-3" style={{ maxWidth: 900 }}>
                                    <h4
                                        className="text-white text-uppercase mb-4"
                                        style={{ letterSpacing: 3 }}
                                    >
                                        Solar Energy
                                    </h4>
                                    <h3 className="display-2 font-secondary text-white mb-4">
                                        Let The Sun Work For Your Home
                                    </h3>
                                    <a
                                        className="btn btn-light font-weight-bold py-3 px-5 mt-2 btn-scroll"
                                        href="#contact"
                                    >
                                        Get A Quote
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev justify-content-start"
                        href="#header-carousel"
                        data-slide="prev"
                    >
                        <div className="btn btn-primary px-0" style={{ width: 68, height: 68 }}>
                            <span className="carousel-control-prev-icon mt-3" />
                        </div>
                    </a>
                    <a
                        className="carousel-control-next justify-content-end"
                        href="#header-carousel"
                        data-slide="next"
                    >
                        <div className="btn btn-primary px-0" style={{ width: 68, height: 68 }}>
                            <span className="carousel-control-next-icon mt-3" />
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}


export default CarouselSection