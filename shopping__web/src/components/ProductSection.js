import React, { Component } from "react"
import p1_img from '../assets/images/p1.png'
import p10_img from '../assets/images/p10.png'
import p11_img from '../assets/images/p11.png'
import p12_img from '../assets/images/p12.png'
import p2_img from '../assets/images/p2.png'
import p3_img from '../assets/images/p3.png'
import p4_img from '../assets/images/p4.png'
import p5_img from '../assets/images/p5.png'
import p6_img from '../assets/images/p6.png'
import p7_img from '../assets/images/p7.png'
import p8_img from '../assets/images/p8.png'
import p9_img from '../assets/images/p9.png'


function ProductSection() {
    return (
        <section className="products_section">
            <div className="heading_container">
                <h2>New Products In Store</h2>
                <p>Featured Product Just Arrived</p>
            </div>
            <div className="container layout_padding">
                <div className="product_container">
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p1_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $120.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p2_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $110.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p3_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p4_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p5_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p6_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p7_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p8_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p9_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p10_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p11_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                    <a href="">
                        <div className="product_box">
                            <div className="product_img-box">
                                <img src={p12_img} alt="" />
                                <span> Sale </span>
                            </div>
                            <div className="product_detail-box">
                                <span> $150.00 </span>
                                <p>Passage of Lorem Ipsum, you</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ProductSection