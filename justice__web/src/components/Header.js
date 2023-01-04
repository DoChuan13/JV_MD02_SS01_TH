import React, { Component } from 'react'


class HeaderSection extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 bg-secondary d-none d-lg-block">
                        <a
                            href="index.html"
                            className="navbar-brand w-100 h-100 m-0 p-0 d-flex align-items-center justify-content-center"
                        >
                            <h1 className="m-0 display-4 text-primary text-uppercase">Justice</h1>
                        </a>
                    </div>
                    <div className="col-lg-9">
                        <div className="row bg-white border-bottom d-none d-lg-flex">
                            <div className="col-lg-7 text-left">
                                <div className="h-100 d-inline-flex align-items-center py-2 px-3">
                                    <i className="fa fa-envelope text-primary mr-2" />
                                    <small>info@example.com</small>
                                </div>
                                <div className="h-100 d-inline-flex align-items-center py-2 px-2">
                                    <i className="fa fa-phone-alt text-primary mr-2" />
                                    <small>+012 345 6789</small>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <div className="d-inline-flex align-items-center p-2">
                                    <a
                                        className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                                        href=""
                                    >
                                        <i className="fab fa-facebook-f" />
                                    </a>
                                    <a
                                        className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                                        href=""
                                    >
                                        <i className="fab fa-twitter" />
                                    </a>
                                    <a
                                        className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                                        href=""
                                    >
                                        <i className="fab fa-linkedin-in" />
                                    </a>
                                    <a
                                        className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                                        href=""
                                    >
                                        <i className="fab fa-instagram" />
                                    </a>
                                    <a
                                        className="btn btn-sm btn-outline-primary btn-sm-square mr-2"
                                        href=""
                                    >
                                        <i className="fab fa-youtube" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav className="navbar navbar-expand-lg bg-white navbar-light p-0">
                            <a href="index.html" className="navbar-brand d-block d-lg-none">
                                <h1 className="m-0 display-4 text-primary text-uppercase">
                                    Justice
                                </h1>
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
                                <div className="navbar-nav mr-auto py-0">
                                    <a href="index.html" className="nav-item nav-link active">
                                        Home
                                    </a>
                                    <a href="#" className="nav-item nav-link">
                                        About
                                    </a>
                                    <a href="#" className="nav-item nav-link">
                                        Practice
                                    </a>
                                    <a href="#" className="nav-item nav-link">
                                        Attorneys
                                    </a>
                                    <div className="nav-item dropdown">
                                        <a
                                            href="#"
                                            className="nav-link dropdown-toggle"
                                            data-toggle="dropdown"
                                        >
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu rounded-0 m-0">
                                            <a href="#" className="dropdown-item">
                                                Menu Item 1
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Menu Item 2
                                            </a>
                                            <a href="#" className="dropdown-item">
                                                Menu Item 3
                                            </a>
                                        </div>
                                    </div>
                                    <a href="#" className="nav-item nav-link">
                                        Contact
                                    </a>
                                </div>
                                <a href="" className="btn btn-primary mr-3 d-none d-lg-block">
                                    Get A Quote
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderSection;