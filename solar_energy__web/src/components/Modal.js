import React, { Component } from "react";
import carousel_1_img from '../assets/images/carousel-1.jpg'

class ModalSection extends Component {
    render() {
        return (
            <div
                className="modal fade"
                id="exampleModalLong"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="exampleModalLongTitle"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">
                                Solar Energy System
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <img className="img-fluid mb-4" src={carousel_1_img} alt="" />
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                            <p>
                                Sit eos diam rebum amet stet sit lorem invidunt, kasd dolor ea
                                dolores ut nonumy, sea est rebum dolore dolor. Lorem tempor tempor
                                gubergren dolor dolor dolor. Kasd amet labore voluptua justo diam,
                                dolore accusam duo est stet nonumy tempor dolores sadipscing duo.
                                Stet at et nonumy erat et sed.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ModalSection