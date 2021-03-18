import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import fish200 from './images/200.gif'
// import giphy from './images/giphy.gif'
// import fishgif from './images/fish.gif'
import chuttersnap from './images/chuttersnap-2yKVezoXLyg-unsplash.jpg'
import danielimg from './images/daniel-norris--O8dNtuT2v4-unsplash.jpg'
import karl from './images/karl-muscat-sEqo82gbhUY-unsplash.jpg'
import martinimg from './images/martin-widenka-aGELchKZZ4c-unsplash (1).jpg'
import tapan from './images/tapan-kumar-choudhury-gFrrHuHMpTw-unsplash.jpg'

class Carousel extends React.Component {
  render() {
    return (
       <div className='gif'>

    <OwlCarousel className="owl-theme" loop margin={10} nav>
        <div class="item">
          <img src={chuttersnap} alt={'ime'}  style={{
                width:'400px', height:'580px'
          }}/>
        </div>
        <div class="item">
          <img src={danielimg} alt="ime" style={{
                width:'400px', height:'580px'
          }}/>
        </div>
        <div class="item">
          <img src={karl} alt={'ime'} style={{
                width:'400px', height:'580px'
          }}/>
        </div>
        <div class="item">
          <img src={martinimg} alt={'ime'} style={{
                width:'400px', height:'580px'
          }}/>
        </div>
        <div class="item">
          <img src={tapan} alt={'ime'} style={{
                width:'400px', height:'580px'
          }}/>
        </div>
     </OwlCarousel> 
        </div>
     
    );
  }
}

export default Carousel
