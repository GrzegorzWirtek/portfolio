import './Contact.scss';
import { useInView } from 'react-intersection-observer';

// const REF_OPTIONS = { triggerOnce: true };
const REF_OPTIONS = {};

const Contact = () => {
	const [contactTitleRef, inViewTitle] = useInView(REF_OPTIONS);

	return (
		<section className='contact' id='contact'>
			<div className='contact__main-wrapper'>
				<h2
					ref={contactTitleRef}
					className={`contact__title ${
						inViewTitle ? 'contact__title--active' : ''
					}`}>
					Kontakt
				</h2>

				<div className='contact__wrapper'>
					<a
						href='tel:506189914'
						className={`contact__text ${
							inViewTitle ? 'contact__text--active' : ''
						}`}>
						<img className='contact__icon' src='phone.svg' alt='Phone icon' />
						506-189-914
					</a>

					<a
						href='mailto:grzegorz.wirtek@wp.pl'
						className={`contact__text ${
							inViewTitle ? 'contact__text--active' : ''
						}`}>
						<img className='contact__icon' src='email.svg' alt='E-mail icon' />
						grzegorz.wirtek@wp.pl
					</a>

					<div className='contact__icons'>
						<a
							href='https://github.com/GrzegorzWirtek'
							target='blank'
							className='contact__social-media'>
							<img
								className={`contact__social-media-icon ${
									inViewTitle ? 'contact__social-media-icon--active-3' : ''
								}`}
								src='gh.svg'
								alt='Github icon'
							/>
						</a>

						<a
							href='https://www.facebook.com/grzegorz.wirtek/'
							target='blank'
							className='contact__social-media'>
							<img
								className={`contact__social-media-icon ${
									inViewTitle ? 'contact__social-media-icon--active-1' : ''
								}`}
								src='fb.svg'
								alt='Facebook icon'
							/>
						</a>

						<a
							href='https://www.instagram.com/grzegorz.wirtek/'
							target='blank'
							className='contact__social-media'>
							<img
								className={`contact__social-media-icon ${
									inViewTitle ? 'contact__social-media-icon--active-2' : ''
								}`}
								src='in.svg'
								alt='Instagram icon'
							/>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
export {};
