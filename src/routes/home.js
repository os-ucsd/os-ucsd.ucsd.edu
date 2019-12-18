import React from "react";
//import "../../assets/js/jquery.min.js";
//import "../../assets/js/jquery.scrollex.min.js";
import "../../assets/js/browser.min.js";
import "../../assets/js/breakpoints.min.js";
//import "../../assets/js/util.js";
//import "../../assets/js/main.js";
import "../../assets/css/main.css";
class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() {
		return (
			<div>
	<div className="is-preload">

		{/*Header*/} 
			<header id="header" className="alt">
				<h1><a href="index.html"><img src="../images/os-logo.png" alt="some text" height="150%"/></a></h1>
				<a href="#menu">Menu</a>
			</header>

		{/*Menu*/} 
			<nav id="menu">
				<ul className="links">
					<li><a href="index.html">Home</a></li>
					<li><a href="generic.html">Generic</a></li>
					<li><a href="elements.html">Elements</a></li>
				</ul>
				<ul className="actions stacked">
					<li><a href="#" className="button primary fit">Sign Up</a></li>
					<li><a href="#" className="button fit">Log In</a></li>
				</ul>
			</nav>

		
		{/*Banner*/} 
			<section id="banner">
				<div className="inner">
					<div className="content">
						<h2>Learn about Open Source Software!</h2>
						<p>Amet tincidunt arcu suspendisse consequat</p>
					</div>
					<ul className="actions stacked">
						<li><a href="#" className="button primary major">Get Started</a></li>
						<li><a href="#" className="button major">More Info</a></li>
					</ul>
				</div>
			</section>

		{/*One*/} 
			<section id="one" className="wrapper style1 split">
				<div className="inner">
					<div className="content">
						<h2>Lorem ipsum accumsan nisl feugiat<br />
						sed consequat adipiscing</h2>
						<p>Amet lorem vivamus viverra, quis semper consequat, sem nibh mattis arcu, dolore porttitor lorem justo in tellus. Aenean lacinia felis et dui viverra, nec accumsan et quam ultricies. Phasellus sapien lorem, rhoncus ultricies.</p>
						<ul className="actions">
							<li><a href="#" className="button">Our Story</a></li>
						</ul>
					</div>
					<div className="image-circles">
						<div className="images">
							<span className="image"><img src="images/pic01.jpg" alt="" /></span>
							<span className="image"><img src="images/pic02.jpg" alt="" /></span>
						</div>
						<div className="images">
							<span className="image"><img src="images/pic03.jpg" alt="" /></span>
							<span className="image"><img src="images/pic04.jpg" alt="" /></span>
						</div>
					</div>
				</div>
			</section>

			<section id="two" className="wrapper style2">
				<div className="inner">
					<header className="major">
						<h2>Gravida nunc accumsan</h2>
						<p>Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia<br />
						interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.</p>
					</header>
					<div className="features">
						<section>
							<span className="icon solid major fa-tag"></span>
							<h3>Quam adipiscing</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
						<section>
							<span className="icon solid major fa-camera-retro"></span>
							<h3>Semper accumsan</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
						<section>
							<span className="icon solid major fa-cloud"></span>
							<h3>Ipsum lorem magna</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
						<section>
							<span className="icon solid major fa-cube"></span>
							<h3>Tempus sed mattis</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
						<section>
							<span className="icon solid major fa-file-alt"></span>
							<h3>Odio fermentum</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
						<section>
							<span className="icon solid major fa-plane"></span>
							<h3>Risus et interdum</h3>
							<p>Feugiat lorem quis semper consequat, sem nibh mattis arcu, amet porttitor lorem justo in cumsan quam ultricies magna tempus.</p>
						</section>
					</div>
					<footer className="major">
						<ul className="actions special">
							<li><a href="#" className="button major">More Features</a></li>
						</ul>
					</footer>
				</div>
			</section>

			<section id="three" className="wrapper style1">
				<div className="inner">
					<div className="spotlights">
						<section>
							<span className="image"><img src="images/pic05.jpg" alt="" /></span>
							<div className="content">
								<h2>Convallis integer iaculis</h2>
								<p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
							</div>
						</section>
						<section>
							<span className="image"><img src="images/pic06.jpg" alt="" /></span>
							<div className="content">
								<h2>Ultrices augue faucibus</h2>
								<p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
							</div>
						</section>
						<section>
							<span className="image"><img src="images/pic07.jpg" alt="" /></span>
							<div className="content">
								<h2>Integer sed sodales</h2>
								<p>Donec elementum odio ut suscipit congue. Fusce magna mattis vel fermentum, ultricies et velit. Suspendisse viverra, ante in eleifend vulputate, lacus lorem pretium ligula, tincidunt posuere sapien neque a augue. Pellentesque habitant morbi tristique senectus et netus et malesuada.</p>
							</div>
						</section>
					</div>
				</div>
			</section>

			<section id="four" className="wrapper style2 special">
				<div className="inner">
					<header>
						<h2>Sed vitae massa curabitur</h2>
						<p>Ipsum quis semper consequat, sem nibh mattis arcu, quis porttitor lorem justo in tellus. Aenean lacinia<br />
						interdum nisl felis et dui viverra, nec accumsan tempus quam ultricies.</p>
					</header>
					<ul className="actions special">
						<li><a href="#" className="button primary major">Get Started</a></li>
					</ul>
				</div>
			</section>

			<footer id="footer">
				<div className="inner">
					<ul className="icons">
						<li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
						<li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
						<li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
						<li><a href="#" className="icon solid fa-envelope"><span className="label">Envelope</span></a></li>
					</ul>
					<ul className="contact">
						<li>12345 Somewhere Road</li>
						<li>Nashville, TN 00000</li>
						<li>(000) 000-0000</li>
					</ul>
					<ul className="links">
						<li><a href="#">FAQ</a></li>
						<li><a href="#">Support</a></li>
						<li><a href="#">Terms</a></li>
						<li><a href="#">Contact</a></li>
					</ul>
					<p className="copyright">&copy; Untitled. All rights reserved. Lorem ipsum dolor.</p>
				</div>
			</footer>


	</div>
			</div>
		)
	}
}
export default Home;
