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
					Tworzenia stron uczę się od ponad dwóch lat. Wcześniej przez kilka
					miesięcy poznawałem język C++. Uczę się samodzielnie korzystając z
					kursów na Udemy (m.in. Samuraj Programowania, Maxymilian
					Schwarzmuller) i YouTube (m.in. Mirosław Zelent, Codevolution), ze
					stron takich jak stackoverflow.com, developer.mozilla.org,
					w3schools.com, oraz z wielu rozmaitych blogów i artykułów dostępnych w
					sieci. Stawiam na naukę przez praktykę, dlatego nowo zdobytą wiedzę
					utrwalam tworząc, w ramach ćwiczeń, większe lub mniejsze aplikacje –
					mam ich na koncie dziesiątki. Niewielką część projektów zamieściłem na
					moim koncie na GitHub - dokumentują one moje postępy w nauce i
					odzwierciedlają poziom umiejętności, na którym znajdowałem się podczas
					ich tworzenia. Obecnie moim priorytetem jest nauka pisania czystego
					kodu, zdobywanie i wprowadzanie dobrych praktyk programistycznych,
					dobre opanowanie TypeScript używanego z React.js, oraz umiejętność
					tworzenia przejrzystej i dobrze rozplanowanej architektury w większych
					projektach. Docelowo chcę dobrze zrozumieć zagadnienia i technologie,
					które pozwolą mi tworzyć wydajne, bezpieczne, dobrze napisane i
					spełniające oczekiwania odbiorców strony i aplikacje webowe.
				</p>
			</div>
		</section>
	);
};

export default About;
export {};
