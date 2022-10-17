import './Projects.scss';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Project from './Project/Project';
import { PROJECTS_ASSETS } from './ProjectsAssets';

// const REF_OPTIONS = { triggerOnce: true };
const REF_OPTIONS = {};

const Projects: React.FC<{
	setHeaderText: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setHeaderText }) => {
	const [projects, inViewProjects] = useInView();
	const [projectsTitleRef, inViewTitle] = useInView(REF_OPTIONS);

	useEffect(() => {
		setHeaderText(!inViewProjects);
	}, [inViewProjects, setHeaderText]);

	const projectList = PROJECTS_ASSETS.map(
		({ title, subtitle, description, imgUrl, pageUrl, githubUrl }) => (
			<Project
				key={title}
				title={title}
				subtitle={subtitle}
				description={description}
				imgUrl={imgUrl}
				pageUrl={pageUrl}
				githubUrl={githubUrl}
			/>
		),
	);

	return (
		<section className='projects' id='projects' ref={projects}>
			<h2
				ref={projectsTitleRef}
				className={`projects__title ${
					inViewTitle ? 'projects__title--active' : ''
				}`}>
				Wybrane projekty
			</h2>
			{projectList}
		</section>
	);
};

export default Projects;
export {};
