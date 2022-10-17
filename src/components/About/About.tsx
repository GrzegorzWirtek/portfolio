import './About.scss';
import { useInView } from 'react-intersection-observer';
import { ABOUT } from './AboutAssets';

const REF_OPTIONS = {};

const About = () => {
	const [aboutRef, inView] = useInView(REF_OPTIONS);

	return (
		<section className='about' id='about' ref={aboutRef}>
			<div className='about__wrapper'>
				<h2 className={`about__title ${inView ? 'about__title--active' : ''}`}>
					O mnie
				</h2>
				<img
					src='me.png'
					alt='Grzegorz Wirtek'
					className={`about__image ${inView ? 'about__image--active' : ''}`}
				/>
				<p className={`about__text ${inView ? 'about__text--active' : ''}`}>
					{ABOUT}
				</p>
			</div>
		</section>
	);
};

export default About;
export {};
