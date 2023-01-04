import React, { Component } from "react"
import d_1_img from '../assets/images/d-1.png'
import d_2_img from '../assets/images/d-2.png'
import d_3_img from '../assets/images/d-3.png'
import d_4_img from '../assets/images/d-4.png'
import detail_img from '../assets/images/detail.png'


function DetailSection() {
    return (
        <section className="detail_section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="detail_img-box">
                            <img src={detail_img} alt="" className="w-100" />
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="detail_container">
                            <div className="detail-box d-box-1">
                                <a href="">
                                    <div className="detail-content">
                                        <img src={d_1_img} alt="" />
                                        <h5>Care kids</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="detail-box d-box-2">
                                <a href="">
                                    <div className="detail-content">
                                        <img src={d_2_img} alt="" />
                                        <h5>Baby boy</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="detail-box d-box-3">
                                <a href="">
                                    <div className="detail-content">
                                        <img src={d_3_img} alt="" />
                                        <h5>Baby girl</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="detail-box d-box-4">
                                <a href="">
                                    <div className="detail-content">
                                        <img src={d_4_img} alt="" />
                                        <h5>Sale</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailSection