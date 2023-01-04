import logo from './logo.svg';
import './App.css';
import NavbarSection from './components/Navbar.js';
import CarouselSection from './components/Carousel.js';
import AboutSection from './components/About.js';
import ServiceSection from './components/Services.js';
import TeamSection from './components/Team.js';
import FAQsSection from './components/FAQs.js';
import ContactSection from './components/Contact.js';
import FooterSection from './components/Footer.js';
import ModalSection from './components/Modal.js';
import ControlToTop from './components/ControlToTop.js';


// import about_img from './assets/images/about.jpg'
// import carousel_1_img from './assets/images/carousel-1.jpg'
// import carousel_2_img from './assets/images/carousel-2.jpg'
// import gallery_1_img from './assets/images/gallery-1.jpg'
// import gallery_2_img from './assets/images/gallery-2.jpg'
// import gallery_3_img from './assets/images/gallery-3.jpg'
// import gallery_4_img from './assets/images/gallery-4.jpg'
// import gallery_5_img from './assets/images/gallery-5.jpg'
// import gallery_6_img from './assets/images/gallery-6.jpg'
// import gallery_img from './assets/images/gallery.jpg'
// import product_1_img from './assets/images/product-1.jpg'
// import product_2_img from './assets/images/product-2.jpg'
// import product_3_img from './assets/images/product-3.jpg'
// import team_1_img from './assets/images/team-1.jpg'
// import team_2_img from './assets/images/team-2.jpg'
// import team_3_img from './assets/images/team-3.jpg'
// import team_4_img from './assets/images/team-4.jpg'
// import testimonial_1_img from './assets/images/testimonial-1.jpg'
// import testimonial_2_img from './assets/images/testimonial-2.jpg'



function App() {
  return (
    <div className="App">
      <>
        {/* Navbar Start */}
        <NavbarSection></NavbarSection>
        {/* Navbar End */}
        {/* Carousel Start */}
        <CarouselSection></CarouselSection>
        {/* Carousel End */}
        {/* About Start */}
        <AboutSection></AboutSection>
        {/* About End */}
        {/* Service Start */}
        <ServiceSection></ServiceSection>
        {/* Service End */}
        {/* Team Start */}
        <TeamSection></TeamSection>
        {/* Team End */}
        {/* FAQs Start */}
        <FAQsSection></FAQsSection>
        {/* FAQs End */}
        {/* Contact Start */}
        <ContactSection></ContactSection>
        {/* Contact End */}
        {/* Footer Start */}
        <FooterSection></FooterSection>
        {/* Footer End */}
        {/* Modal */}
        <ModalSection></ModalSection>
        {/* Modal */}
        {/* Back to Top */}
        <ControlToTop></ControlToTop>
        {/* JavaScript Libraries */}
        {/* Contact Javascript File */}
        {/* Template Javascript */}
      </>

    </div>
  );
}

export default App;
