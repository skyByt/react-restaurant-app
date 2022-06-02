import React from 'react'
import './home.css'
import img from './assets/pic-header.jpg'

const Home = () => {
  return (
    <>
      <div id="home-page" className="container-xxl">
			<div>
				<img src={img} className="img-fluid" alt="pizza-header"/>
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-6 col-md-4">
					<a href="#">
						<div id="menu-tile"><span>Menu</span></div>
					</a>
				</div>
				<div className="col-xs-12 col-sm-6 col-md-4">
					<a href="#">
						<div id="specials-tile"><span>Specials</span></div>
					</a>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-4">
					<div id="maps-tile">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11199.323550867464!2d-75.70340205!3d45.43291025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce04f250722f33%3A0xdf56fa747ac8b9ff!2sMcDonald&#39;s!5e0!3m2!1sen!2sca!4v1653634146455!5m2!1sen!2sca"
							 width="100%" height="250" style={{border:0}} allowfullscreen="" loading="lazy" 
							 referrerpolicy="no-referrer-when-downgrade"></iframe>
						<span>Maps</span>
					</div>
				</div>
			</div>
		</div>
    </>
  )
}

export default Home
