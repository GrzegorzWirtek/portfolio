import './Skills.scss';
import { useInView } from 'react-intersection-observer';
import { ICONS, SKILLS } from './SkillsAssets';

const REF_OPTIONS = {};

const Skills = () => {
	const [skillsRef, inView] = useInView(REF_OPTIONS);
	const [skillTitleRef, inViewTitle] = useInView(REF_OPTIONS);

	const skillsContent = SKILLS.map((item, index) => (
		<div className={`skill ${inView ? 'skill--active' : ''}`} key={item}>
			<div className='skill__title'>
				<img className='skill__title-icon' src={`${ICONS[index]}.svg`} alt='' />
				<p className='skill__title-text'>{item}</p>
			</div>
			<div className='skill__percentage'></div>
		</div>
	));

	return (
		<section className='skills' id='skills' ref={skillsRef}>
			<div
				className={`skills__curtain ${
					inView ? 'skills__curtain--active' : ''
				}`}></div>
			<div className='skills__main-wrapper'>
				<h2
					ref={skillTitleRef}
					className={`skills__title ${
						inViewTitle ? 'skills__title--active' : ''
					}`}>
					Technologie
				</h2>
				<div className='skills__wrapper'>{skillsContent}</div>
			</div>
		</section>
	);
};

export default Skills;
export {};
