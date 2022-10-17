import './Project.scss';
import Button from '../../Button/Button';
import { ProjectType } from '../ProjectsAssets';

import { useInView } from 'react-intersection-observer';

// const REF_OPTIONS = { triggerOnce: true };
const REF_OPTIONS = {};
const SIZE_LARGE = '500px';

const Project: React.FC<ProjectType> = ({
	title,
	subtitle,
	description,
	imgUrl,
	pageUrl,
	githubUrl,
}) => {
	const [project, inViewProject] = useInView(REF_OPTIONS);

	const handleGoToPage = () => {
		window.open(pageUrl, '_blank');
	};

	const handleGoToGithub = () => {
		window.open(githubUrl, '_blank');
	};

	return (
		<div
			className={`project ${inViewProject ? 'project--active' : ''}`}
			ref={project}>
			<div className='project__text-wrapper'>
				<h3 className='project__title'>{title}</h3>
				<p className='project__subtitle'>{subtitle}</p>
				<p className='project__description'>{description}</p>
			</div>
			<picture className='project__img-wrapper'>
				<source media={`(min-width: ${SIZE_LARGE})`} srcSet={`${imgUrl}.png`} />
				<img
					src={`${imgUrl}-min.png`}
					alt='Projekt TV series'
					className='project__img'
					onClick={handleGoToPage}
				/>
				<Button handleClick={handleGoToPage}>Odwiedź stronę</Button>
				<Button handleClick={handleGoToGithub}>Projekt GitHub</Button>
			</picture>
		</div>
	);
};
export default Project;
