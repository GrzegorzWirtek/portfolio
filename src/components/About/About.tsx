import './About.scss';
import { useInView } from 'react-intersection-observer';

// const REF_OPTIONS = { triggerOnce: true };
const REF_OPTIONS = {};

const About = () => {
	const [aboutTitleRef, inViewTitle] = useInView(REF_OPTIONS);
	console.log(inViewTitle);

	return (
		<section className='about' id='about'>
			<div className='about__wrapper'>
				<h2
					ref={aboutTitleRef}
					className={`about__title ${
						inViewTitle ? 'about__title--active' : ''
					}`}>
					O mnie
				</h2>
				<img src='me.png' alt='Grzegorz Wirtek' className='about__image' />
				<p className='about__text'>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
					earum assumenda at velit, ex et, facere tempora dicta reprehenderit
					quae veritatis numquam quisquam facilis eos exercitationem ducimus
					delectus vero, voluptates rerum cumque. Libero minima earum, sint
					officiis error, voluptates pariatur eum iusto amet perspiciatis
					expedita quis at aliquam voluptas aspernatur saepe accusamus ducimus
					incidunt necessitatibus aperiam. Expedita, possimus sunt! Dolore,
					mollitia expedita! Cupiditate voluptas delectus expedita! Ut facere
					nemo harum non, velit eos animi sequi, autem exercitationem voluptas
					nulla commodi sapiente quas amet, quae officiis et eum iste dolores
					deserunt cumque iusto! Voluptatum ex cum quos reprehenderit non, quo
					similique.
				</p>
			</div>
		</section>
	);
};

export default About;
export {};
