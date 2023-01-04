import React, { Component } from 'react';


class NavbarSection extends Component {
    render() {
        return (
            <nav className="navbar fixed-top shadow-sm navbar-expand-lg bg-dark navbar-dark py-1 py-lg-0 px-lg-5">
                <a href="index.html" className="navbar-brand d-block d-lg-none">
                    <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
                </a>
                <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                >
                    <div className="navbar-nav ml-auto py-0">
                        <a href="#home" className="nav-item nav-link active">
                            Home
                        </a>
                        <a href="#about" className="nav-item nav-link">
                            About
                        </a>
                        <a href="#service" className="nav-item nav-link">
                            Service
                        </a>
                        <a href="#project" className="nav-item nav-link">
                            Project
                        </a>
                    </div>
                    <a
                        href="index.html"
                        className="navbar-brand bg-primary px-4 mx-3 d-none d-lg-block"
                    >
                        <h1 className="display-4 text-white text-uppercase m-0">Solar</h1>
                    </a>
                    <div className="navbar-nav mr-auto py-0">
                        <a href="#team" className="nav-item nav-link">
                            Team
                        </a>
                        <a href="#faqs" className="nav-item nav-link">
                            FAQs
                        </a>
                        <a href="#testimonial" className="nav-item nav-link">
                            Testimonial
                        </a>
                        <a href="#contact" className="nav-item nav-link">
                            Contact
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavbarSection