import './Nav.scss';
import Ham from '../Ham/Ham';
import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
	const [navVisible, setNavVisible] = useState(false);
	const [navBcg, setNavBcg] = useState(false);

	const handleScroll = (e: Event) => {
		window.scrollY > 0 ? setNavBcg(true) : setNavBcg(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleHamClick = () => {
		setNavVisible((prev) => !prev);
	};

	const handleHamClose = () => {
		setNavVisible(false);
	};

	const handleTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<nav className={`nav ${navBcg ? 'nav--active' : ''}`}>
			<Ham click={handleHamClick} navVisible={navVisible} />
			<ul
				className={`nav__ul ${navVisible ? 'nav__ul--mobile-active' : ''}`}
				onClick={handleHamClose}>
				<ul
					onClick={() => {
						handleHamClose();
						handleTop();
					}}
					className='nav__li nav__li--important'>
					Do góry
				</ul>
				<Link
					onClick={handleHamClose}
					className='nav__li nav__li--important'
					activeClass='active'
					to='skills'
					spy={true}
					smooth={true}
					offset={50}
					duration={500}>
					Technologie
				</Link>
				<Link
					onClick={handleHamClose}
					className='nav__li nav__li--important'
					activeClass='active'
					to='projects'
					spy={true}
					smooth={true}
					offset={50}
					duration={500}>
					Projekty
				</Link>
				<Link
					onClick={handleHamClose}
					className='nav__li nav__li--important'
					activeClass='active'
					to='about'
					spy={true}
					smooth={true}
					offset={50}
					duration={500}>
					O mnie
				</Link>
				<Link
					onClick={handleHamClose}
					className='nav__li nav__li--important'
					activeClass='active'
					to='contact'
					spy={true}
					smooth={true}
					offset={50}
					duration={500}>
					Kontakt
				</Link>
			</ul>
		</nav>
	);
};

export default Nav;
export {};
