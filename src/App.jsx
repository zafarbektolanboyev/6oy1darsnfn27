import React from 'react'
import routex from '../src/assets/routex.png'
import chat from '../src/assets/chat.png'
import '../src/App.css'
import hero from '../src/assets/hero.png'
import about from '../src/assets/about.png'
function App() {
  return (
    <>
      <header className='header__container container'>
        <div className="logo">
          <img src={routex} alt="" />
        </div>
        <nav className="nav">
          <ul className="menu">
            <li><a href="#" className='active'>Home</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
        <div className="help">
          <img src={chat} alt="" />
          <div className="text">
            <h6>Need help?</h6>
            <p>(307)555-0133</p>
          </div>
        </div>
      </header>
      <div className="hero__container container">
        <img className='hero-img' src={hero} alt="" />
        <div className="content">
          <h1>Journey with Confidence <span>Migrate</span> with Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet<br />rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <button>Learn More</button>
        </div>
      </div>
      <div className="about__container container">
        <img className='about-img' src={about} alt="" />
        <div className="about-text">
          <h4 className="about-title">
            About Us
          </h4>
          <h1 className="text-about">
            Unknown Wanderlust <br /> <span className='about-span'>Your Journey into</span>
          </h1>
          <p className='about-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet <br /> rcus nunc. Duis egestas ac ante sed tincidunt.</p>
          <div className="check">
            <div className="card">
              <div className="input">
                <input type="checkbox" />
                <h6>Safetiy Guides</h6>
              </div>
              <p>Lorem ipsum dolor sit amet, cons ectetur <br /> adipiscing elit.</p>
            </div>
            <div className="card">
              <div className="input">
                <input type="checkbox" />
                <h6>Passport Assistance</h6>
              </div>
              <p>Lorem ipsum dolor sit amet, cons ectetur <br /> adipiscing elit.</p>
            </div>
          </div>
          <button className="about-btn">Read More</button>
        </div>
      </div>
      
    </>
  )
}

export default App
