import logo from './logo.svg';
import './App.css';
import HeaderSection from './components/Header.js'
import SlideSection from './components/SlideSection.js';
import DetailSection from './components/DetailSection.js'
import ProductSection from './components/ProductSection.js';
import FindSection from './components/FindSection.js';
import ClientSection from './components/ClientSection.js';
import SignSection from './components/SignSection.js';
import InfoSection from './components/InfoSection.js';
import FooterSection from './components/FooterSection.js';


// Import All Picture
// import apple_store_img from './assets/images/apple-store.png'
// import client_img from './assets/images/client.png'
// import d_1_img from './assets/images/d-1.png'
// import d_2_img from './assets/images/d-2.png'
// import d_3_img from './assets/images/d-3.png'
// import d_4_img from './assets/images/d-4.png'
// import detail_img from './assets/images/detail.png'
// import fb_img from './assets/images/fb.png'
// import find_hero_img from './assets/images/find-hero.png'
// import find_img_img from './assets/images/find-img.png'
// import google_play_img from './assets/images/google-play.png'
// import hero_img from './assets/images/hero.png'
// import instagram_img from './assets/images/instagram.png'
// import items_img from './assets/images/items.png'
// import left_black_arrow_img from './assets/images/left-black-arrow.png'
// import linkedin_img from './assets/images/linkedin.png'
// import logo_img from './assets/images/logo.png'
// import menu_img from './assets/images/menu.png'
// import next_img from './assets/images/next.png'
// import p1_img from './assets/images/p1.png'
// import p10_img from './assets/images/p10.png'
// import p11_img from './assets/images/p11.png'
// import p12_img from './assets/images/p12.png'
// import p2_img from './assets/images/p2.png'
// import p3_img from './assets/images/p3.png'
// import p4_img from './assets/images/p4.png'
// import p5_img from './assets/images/p5.png'
// import p6_img from './assets/images/p6.png'
// import p7_img from './assets/images/p7.png'
// import p8_img from './assets/images/p8.png'
// import p9_img from './assets/images/p9.png'
// import prev_img from './assets/images/prev.png'
// import right_black_arrow_img from './assets/images/right-black-arrow.png'
// import search_icon_img from './assets/images/search-icon.png'
// import shoes_img from './assets/images/shoes.png'
// import sign_img from './assets/images/sign.jpg'
// import twitter_img from './assets/images/twitter.png'



function App() {
  return (
    <div className="App">
      <>
        <div className="hero_area">
          {/* header section strats */}
          <HeaderSection></HeaderSection>
          {/* end header section */}
          {/* slider section */}
          <SlideSection></SlideSection>
          {/* end slider section */}
        </div>
        {/* detail section */}
        <DetailSection></DetailSection>
        {/* end detail section */}
        {/* products section */}
        <ProductSection></ProductSection>
        {/* end products section */}
        {/* find section */}
        <FindSection></FindSection>
        {/* end find section */}
        {/* client section */}
        <ClientSection></ClientSection>
        {/* end client section */}
        {/* sign section */}
        <SignSection></SignSection>
        {/* end sign section */}
        {/* info section */}
        <InfoSection></InfoSection>
        {/* end info section */}
        {/* footer section */}
        <FooterSection></FooterSection>
        {/* footer section */}
      </>

    </div>
  );
}

export default App;
