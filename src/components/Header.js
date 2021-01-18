import { Link } from 'react-router-dom';

import './Header.css';

import IconFacebook from './icons/IconFacebook.js';
import IconInstagram from './icons/IconInstagram.js';
import IconRSS from './icons/IconRSS.js';
import IconTwitter from './icons/IconTwitter.js';
import IconYoutube from './icons/IconYoutube.js';

function Header() {
	return (
		<header>
			<nav className="nav__main">
				<div className="container">
					<div className="nav-section__support">
						<a href="https://tamogatas.telex.hu">Támogatás</a>
					</div>

					<div className="nav-section__logo">
						<Link to="/">telex</Link>
					</div>

					<div className="nav-section__social">
						<a href="https://wwww.facebook.com/telexhu"><IconFacebook /></a>
						<a href="https://www.instagram.com/telexponthu"><IconInstagram /></a>
						<a href="https://www.youtube.com/c/Telexponthu"><IconYoutube /></a>
						<a href="https://www.twitter.com/telexhu"><IconTwitter /></a>
						<a href="https://www.telex.hu/rss"><IconRSS /></a>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
