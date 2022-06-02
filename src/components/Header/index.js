import React from 'react'
import './header.css'
import logo from './assets/logo.png'


const Header = () => {
  return (
	<div className='container-xxl'>
      <nav className="navbar navbar-expand-lg">
			<div className="container-xxl">
				<a id="brand" href="index.html" className="navbar-brand h1 mb-0 align-middle">
					<img id="logo-img" className="d-inline-block" src={logo} alt=""/>
					<span className="d-none d-sm-inline-block d-flex">Spicy Pizza Bistro</span>
				</a>
				<button className="navbar-toggler collapsed d-flex flex-column justify-content-around d-lg-none" 
				type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" 
				aria-expanded="false" aria-label="Toggle navigation">
					<span className="toggler-icon top-bar"></span>
					<span className="toggler-icon middle-bar"></span>
					<span className="toggler-icon bottom-bar"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<ul id="nav-list" className="navbar-nav align-middle">
						<li className="nav-item">
							<a href="menu.html" className="nav-link active">
								<i className="fas fa-pizza-slice"> Menu</i>
								
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link active">
								<i className="fa-solid fa-circle-info"> About</i>
							</a>
						</li>
						<li className="nav-item">
							<a href="#" className="nav-link active">
								<i className="fa-solid fa-award"> Awards</i>
							</a>
						</li>
						<li className="nav-item">
							<a href="tel:343-456-3000" className="nav-link active">
								<i className="fa-solid fa-mobile-button"> 343-456-3000</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
  )
}

export default Header
