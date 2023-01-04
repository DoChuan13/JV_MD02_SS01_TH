import logo from './logo.svg';
import './App.css';

// Import All Picture
import about_img_img0 from './assets/images/about-img.png'
import about_img_img from './assets/images/about_img.png'
import about_right_cross_img from './assets/images/about_right_cross.jpg'
import angle_left_img from './assets/images/angle-left.png'
import angle_right_img from './assets/images/angle-right.png'
import banner_bg_img from './assets/images/banner-bg.png'
import banner_img_img from './assets/images/banner_img.png'
import call_icon_img from './assets/images/call-icon.png'
import client_img_img from './assets/images/client-img.png'
import face_img_img from './assets/images/face-img.png'
import face_img1_img from './assets/images/face-img1.png'
import fb_icon_img from './assets/images/fb-icon.png'
import glass1_img from './assets/images/glass1.png'
import glass2_img from './assets/images/glass2.png'
import glass3_img from './assets/images/glass3.png'
import glass4_img from './assets/images/glass4.png'
import glass5_img from './assets/images/glass5.png'
import glass6_img from './assets/images/glass6.png'
import glass7_img from './assets/images/glass7.png'
import glass8_img from './assets/images/glass8.png'
import img_1_img from './assets/images/img-1.png'
import img_2_img from './assets/images/img-2.png'
import img_5_img from './assets/images/img-5.png'
import img_6_img from './assets/images/img-6.png'
import img_7_img from './assets/images/img-7.png'
import instagram_icon_img from './assets/images/instagram-icon.png'
import linkedin_icon_img from './assets/images/linkedin-icon.png'
import loading_img from './assets/images/loading.gif'
import mail_icon_img from './assets/images/mail-icon.png'
import map_icon_img from './assets/images/map-icon.png'
import menu_icon_img from './assets/images/menu_icon.png'
import our_img from './assets/images/our.png'
import product_img_img from './assets/images/product-img.png'
import quick_icon_img from './assets/images/quick-icon.png'
import search_icon_img from './assets/images/search-icon.png'
import shop_img_img from './assets/images/shop_img.png'
import trolly_icon_img from './assets/images/trolly-icon.png'
import twitter_icon_img from './assets/images/twitter-icon.png'
import user_icon_img from './assets/images/user-icon.png'
import youtub_icon_img from './assets/images/youtub-icon.png'


function App() {
  return (
    <div className="App">
      <>
        {/* loader  */}
        <div className="loader_bg">
          <div className="loader">
            <img src={loading_img} alt="#" />
          </div>
        </div>
        {/* end loader */}
        {/* header */}
        <header>
          {/* header inner */}
          <div className="header">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                  <div className="full">
                    <div className="center-desk">
                      <div className="logo">
                        <a href="index.html">
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Logo-Rikkei.png"
                            alt="#"
                            style={{ height: 70 }}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                  <nav className="navigation navbar navbar-expand-md navbar-dark ">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-toggle="collapse"
                      data-target="#navbarsExample04"
                      aria-controls="navbarsExample04"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsExample04">
                      <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                          <a className="nav-link" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="about.html">
                            About
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="glasses.html">
                            Our Glasses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="shop.html">
                            Shop
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="contact.html">
                            Contact Us
                          </a>
                        </li>
                        <li className="nav-item d_none login_btn">
                          <a className="nav-link" href="#">
                            Login
                          </a>
                        </li>
                        <li className="nav-item d_none">
                          <a className="nav-link" href="#">
                            Register
                          </a>
                        </li>
                        <li className="nav-item d_none sea_icon">
                          <a className="nav-link" href="#">
                            <i className="fa fa-shopping-bag" aria-hidden="true" />
                            <i className="fa fa-search" aria-hidden="true" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* end header inner */}
        {/* end header */}
        {/* banner */}
        <section className="banner_main">
          <div id="banner1" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#banner1" data-slide-to={0} className="active" />
              <li data-target="#banner1" data-slide-to={1} />
              <li data-target="#banner1" data-slide-to={2} />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src={banner_img_img} alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src={banner_img_img} alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="container">
                  <div className="carousel-caption">
                    <div className="text-bg">
                      <h1>
                        {" "}
                        <span className="blu">
                          Welcome <br />
                        </span>
                        To Rikkei Shop
                      </h1>
                      <figure>
                        <img src={banner_img_img} alt="#" />
                      </figure>
                      <a className="read_more" href="#">
                        Shop Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#banner1"
              role="button"
              data-slide="prev"
            >
              <i className="fa fa-arrow-left" aria-hidden="true" />
            </a>
            <a
              className="carousel-control-next"
              href="#banner1"
              role="button"
              data-slide="next"
            >
              <i className="fa fa-arrow-right" aria-hidden="true" />
            </a>
          </div>
        </section>
        {/* end banner */}
        {/* about section */}
        <div className="about">
          <div className="container">
            <div className="row d_flex">
              <div className="col-md-5">
                <div className="about_img">
                  <figure>
                    <img src={about_img_img} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-7">
                <div className="titlepage">
                  <h2>About Our Shop</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration in some form, by
                    injected humour, or randomised words which don't look even
                    slightly believable. If you are going to use a passage of Lorem
                    Ipsum, you need to be sure there isn't anything embarrassing
                    hidden in the middle of text.
                  </p>
                </div>
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* about section */}
        {/* Our  Glasses section */}
        <div className="glasses">
          <div className="container">
            <div className="row">
              <div className="col-md-10 offset-md-1">
                <div className="titlepage">
                  <h2>Our Glasses</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labor e et dolore magna aliqua. Ut
                    enim ad minim veniam, qui
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass1_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass2_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass3_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass4_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass5_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass6_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass7_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="glasses_box">
                  <figure>
                    <img src={glass8_img} alt="#" />
                  </figure>
                  <h3>
                    <span className="blu">$</span>50
                  </h3>
                  <p>Sunglasses</p>
                </div>
              </div>
              <div className="col-md-12">
                <a className="read_more" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* end Our  Glasses section */}
        {/* Our shop section */}
        <div id="about" className="shop">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-5">
                <div className="shop_img">
                  <figure>
                    <img src={shop_img_img} alt="#" />
                  </figure>
                </div>
              </div>
              <div className="col-md-7 padding_right0">
                <div className="max_width">
                  <div className="titlepage">
                    <h2>Best SunGlasses At Our shop</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                      enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                      in reprehenderit in voluptate velit esse cillum dolore
                    </p>
                    <a className="read_more" href="#">
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end Our shop section */}
        {/* clients section */}
        <div className="clients">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="titlepage">
                  <h2>What say our clients</h2>
                  <p>
                    orem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut la
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div
                  id="myCarousel"
                  className="carousel slide clients_Carousel "
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#myCarousel" data-slide-to={1} />
                    <li data-target="#myCarousel" data-slide-to={2} />
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption ">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src={our_img} alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader will be
                                  distracted by the readable content of a page when
                                  looking at its layout. The point of using Lorem
                                  Ipsum is that it has a more-or-less normal
                                  distribution of letters,It is a long established
                                  fact a more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src={our_img} alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader will be
                                  distracted by the readable content of a page when
                                  looking at its layout. The point of using Lorem
                                  Ipsum is that it has a more-or-less normal
                                  distribution of letters,It is a long established
                                  fact a more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="clients_box">
                                <figure>
                                  <img src={our_img} alt="#" />
                                </figure>
                                <h3>Sandy Mark</h3>
                                <p>
                                  It is a long established fact that a reader will be
                                  distracted by the readable content of a page when
                                  looking at its layout. The point of using Lorem
                                  Ipsum is that it has a more-or-less normal
                                  distribution of letters,It is a long established
                                  fact a more-or-less normal distribution of letters,
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left" />
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#myCarousel"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end clients section */}
        {/* contact section */}
        <div id="contact" className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <form id="request" className="main_form">
                  <div className="row">
                    <div className="col-md-12 ">
                      <h3>Contact Us</h3>
                    </div>
                    <div className="col-md-12 ">
                      <input
                        className="contactus"
                        placeholder="Name"
                        type="type"
                        name="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Phone Number"
                        type="type"
                        name="Phone Number"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactus"
                        placeholder="Email"
                        type="type"
                        name="Email"
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        className="contactusmess"
                        placeholder="Message"
                        type="type"
                        message="Name"
                      />
                    </div>
                    <div className="col-md-12">
                      <button className="send_btn">Send</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="map_section">
              <div id="map"></div>
            </div>
          </div>
        </div>
        {/* end contact section */}
        {/*  footer */}
        <footer>
          <div className="footer">
            <div className="container">
              <div className="row">
                <div className="col-md-8 offset-md-2">
                  <ul className="location_icon">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true" />
                      </a>
                      <br /> Location
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                      </a>
                      <br /> +01 1234567890
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope" aria-hidden="true" />
                      </a>
                      <br /> demo@gmail.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <p>
                      © 2019 All Rights Reserved. Design by
                      <a href="https://html.design/"> Free Html Templates</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* Javascript files*/}
        {/* sidebar */}
        {/* google map js */}
        {/* end google map js */}
      </>

    </div>
  );
}

export default App;
