import './About.scss';
import { useInView } from 'react-intersection-observer';

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
					Programowaniem zainteresowałem się z ciekawości, szukając przestrzeni
					do samorealizacji. Pomyślałem, że w czasach, gdy komputery odgrywają
					tak ważną rolę, warto wiedzieć w jaki sposób działają. Zacząłem od
					języka C++ i - ku własnemu zaskoczeniu - znalazłem w pisaniu kodu
					niezwykłą satysfakcję. Następnym krokiem było wybranie drogi dalszego
					rozwoju - wybór padł na frontend. <br />
					Moja młodość była połączeniem dwóch światów - wielu pasji (muzyka, gra
					na gitarze, komponowanie, obróbka dźwięku, fotografia, psychologia) i
					pracy zarobkowej (posada w korporacji zajmującej się moniotorowaniem
					rynku farmaceutycznego). Obie te role ukształtowały we mnie
					zamiłowanie do twórczego, kreatywnego działania, z metodyczną,
					codzienną pracą, w której liczy się niezawodność, solidność i
					zaufanie. Ostatnie trzy lata spędziłem na codziennej nauce po
					godzinach pracy. Wbrew pozorom nie był to dla mnie wielki wysiłek -
					pisanie stron sprawia mi wielką frajdę, a pokonywanie
					programistycznych problemów i nieustanna potrzeba podnoszenia
					kompetencji - satysfakcję. Wierzę, że znajdę przestrzeń, w której będę
					mógł w pełni poświęcić się tworzeniu stron, zarabiać na tym i stawać
					się w swoim fachu coraz lepszym.
				</p>
			</div>
		</section>
	);
};

export default About;
export {};
