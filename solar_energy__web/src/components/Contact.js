import React, { Component } from "react";


class ContactSection extends Component {
    render() {
        return (
            <div className="container-fluid py-5" id="contact">
                <div className="container py-5">
                    <div className="section-title position-relative text-center">
                        <h6
                            className="text-uppercase text-primary mb-3"
                            style={{ letterSpacing: 3 }}
                        >
                            Contact
                        </h6>
                        <h1 className="font-secondary display-4">Get In Touch</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="contact-form">
                                <div id="success" />
                                <form name="sentMessage" id="contactForm" noValidate="novalidate">
                                    <div className="form-row">
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="text"
                                                className="form-control bg-secondary border-0 py-4 px-3"
                                                id="name"
                                                placeholder="Your Name"
                                                required="required"
                                                data-validation-required-message="Please enter your name"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                        <div className="col-sm-6 control-group">
                                            <input
                                                type="email"
                                                className="form-control bg-secondary border-0 py-4 px-3"
                                                id="email"
                                                placeholder="Your Email"
                                                required="required"
                                                data-validation-required-message="Please enter your email"
                                            />
                                            <p className="help-block text-danger" />
                                        </div>
                                    </div>
                                    <div className="control-group">
                                        <input
                                            type="text"
                                            className="form-control bg-secondary border-0 py-4 px-3"
                                            id="subject"
                                            placeholder="Subject"
                                            required="required"
                                            data-validation-required-message="Please enter a subject"
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="control-group">
                                        <textarea
                                            className="form-control bg-secondary border-0 py-2 px-3"
                                            rows={6}
                                            id="message"
                                            placeholder="Message"
                                            required="required"
                                            data-validation-required-message="Please enter your message"
                                            defaultValue={""}
                                        />
                                        <p className="help-block text-danger" />
                                    </div>
                                    <div className="text-center">
                                        <button
                                            className="btn btn-primary font-weight-bold py-3 px-5"
                                            type="submit"
                                            id="sendMessageButton"
                                        >
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactSection