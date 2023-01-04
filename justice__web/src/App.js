import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header.js';
import CarouselSection from './components/Carousel.js';
import AboutSection from './components/About.js';
import ServiceSection from './components/Services.js';
import AppointmentSection from './components/Apointment.js';
import FeaturesSection from './components/Features.js';
import ActionSection from './components/Action.js';
import TeamSection from './components/Team.js';
import TestimonialSection from './components/Testimonial.js';
import FooterSection from './components/Footer.js';
import ControlToTop from './components/ControlToTop.js';


// Import All Picture
// import about_img from './assets/images/about.jpg'
// import carousel_1_img from './assets/images/carousel-1.jpg'
// import carousel_2_img from './assets/images/carousel-2.jpg'
// import feature_img from './assets/images/feature.jpg'
// import team_1_img from './assets/images/team-1.jpg'
// import team_2_img from './assets/images/team-2.jpg'
// import team_3_img from './assets/images/team-3.jpg'
// import team_4_img from './assets/images/team-4.jpg'
// import team_5_img from './assets/images/team-5.jpg'
// import testimonial_1_img from './assets/images/testimonial-1.jpg'
// import testimonial_2_img from './assets/images/testimonial-2.jpg'
// import testimonial_3_img from './assets/images/testimonial-3.jpg'
// import testimonial_4_img from './assets/images/testimonial-4.jpg'



function App() {
  return (
    <div className="App">
      <>
        {/* Header Start */}
        <HeaderSection></HeaderSection>
        {/* Header End */}
        {/* Carousel Start */}
        <CarouselSection></CarouselSection>
        {/* Carousel End */}
        {/* About Start */}
        <AboutSection></AboutSection>
        {/* About End */}
        {/* Services Start */}
        <ServiceSection></ServiceSection>
        {/* Services End */}
        {/* Appointment Start */}
        <AppointmentSection></AppointmentSection>
        {/* Appointment End */}
        {/* Features Start */}
        <FeaturesSection></FeaturesSection>
        {/* Features End */}
        {/* Action Start */}
        <ActionSection></ActionSection>
        {/* Action End */}
        {/* Team Start */}
        <TeamSection></TeamSection>
        {/* Team End */}
        {/* Testimonial Start */}
        <TestimonialSection></TestimonialSection>
        {/* Testimonial End */}
        {/* Footer Start */}
        <FooterSection></FooterSection>
        {/* Footer End */}
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
