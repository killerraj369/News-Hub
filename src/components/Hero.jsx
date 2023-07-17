// import React from "react";

// function Hero(){
// return(
//     <>
//     <div style={{height : "50vh"}} className="container-fluid bg-dark text-white d-flex justify-content-center align-items-center flex-column">
//     <h1 style={{color:"yellow"}}>News Hub</h1>
//     <h3>See the latest Breaking News</h3>
//     </div>
//     </>
// )
// }

// export default Hero;

import React from "react";
import "./Hero.css"

function Hero() {
  return (
    <div className="hero-container">
      <video autoPlay muted loop className="hero-video">
        <source src="/intro.mp4" type="video/mp4" />
      </video>
      <div className="hero-content">
        <h1 style={{ color: "yellow" }}>News Hub</h1>
        <h3>See the latest Breaking News</h3>
      </div>
    </div>
  );
}

export default Hero;
