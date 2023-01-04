import React, { Component } from 'react'
import about_img from '../assets/images/about.jpg'

class AboutSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-5">
                            <img className="img-fluid rounded" src={about_img} alt="" />
                        </div>
                        <div className="col-lg-7 mt-4 mt-lg-0">
                            <h2
                                className="position-relative text-center bg-white text-primary rounded p-3 mt-4 mb-4 d-none d-lg-block"
                                style={{ width: 350, marginLeft: "-205px" }}
                            >
                                25 Years Experience
                            </h2>
                            <h6 className="text-uppercase">Learn About Us</h6>
                            <h1 className="mb-4">
                                We Provide Reliable And Effective Legal Services
                            </h1>
                            <p>
                                Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo
                                dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat
                                justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor
                            </p>
                            <a href="" className="btn btn-primary mt-2">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutSection