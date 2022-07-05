import { useState } from 'react';
import './Header.scss';

const Header: React.FC<{ textVisible: boolean }> = ({ textVisible }) => {
	const [loaded, setLoaded] = useState(false);

	return (
		<header className={`header ${loaded ? 'header--active' : null}`}>
			<video
				autoPlay
				loop
				muted
				src='pexels-marian-croitoru-5607784.mp4'
				className='header__video'
				onLoadedData={() => setLoaded(true)}></video>
			{/* <img src='temporary.png' alt='' /> */}
			{textVisible ? (
				<section className='header__name-wrapper'>
					<h1 className='header__name'>Grzegorz</h1>
					<h1 className='header__name'>Wirtek</h1>
					<h2 className='header__title'>PORTFOLIO</h2>
					<p className='header__subtitle'>Frontend Developer</p>
				</section>
			) : null}
		</header>
	);
};

export default Header;
export {};
