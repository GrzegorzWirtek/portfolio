import './Header.scss';

const Header = () => {
	return (
		<header className='header'>
			<div className='ham'>
				<div className='ham__item'></div>
				<div className='ham__item'></div>
				<div className='ham__item'></div>
			</div>
			<video
				autoPlay
				loop
				muted
				src='pexels-marian-croitoru-5607784.mp4'
				className='header__video'></video>
			<section className='header__name-wrapper'>
				<h1 className='header__name'>Grzegorz</h1>
				<h1 className='header__name'>Wirtek</h1>
				<h2 className='header__title'>PORTFOLIO</h2>
				<p className='header__subtitle'>Frontend Developer</p>
			</section>
		</header>
	);
};

export default Header;
export {};
