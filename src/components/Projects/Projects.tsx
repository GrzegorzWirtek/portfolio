import './Projects.scss';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const REF_OPTIONS = { triggerOnce: true };

const Projects: React.FC<{
	setHeaderText: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setHeaderText }) => {
	const [projects, inViewProjects] = useInView();
	const [projectsTitleRef, inViewTitle] = useInView(REF_OPTIONS);
	const [project1, inView1] = useInView(REF_OPTIONS);
	const [project2, inView2] = useInView(REF_OPTIONS);
	const [project3, inView3] = useInView(REF_OPTIONS);
	const [project4, inView4] = useInView(REF_OPTIONS);
	const [project5, inView5] = useInView(REF_OPTIONS);
	const [project6, inView6] = useInView(REF_OPTIONS);
	const [project7, inView7] = useInView(REF_OPTIONS);
	const [project8, inView8] = useInView(REF_OPTIONS);

	const SIZE_MEDIUM = '800px';
	const SIZE_LARGE = '1200px';

	useEffect(() => {
		setHeaderText(!inViewProjects);
	}, [inViewProjects, setHeaderText]);

	return (
		<section className='projects' id='projects' ref={projects}>
			<h2
				ref={projectsTitleRef}
				className={`projects__title ${
					inViewTitle ? 'projects__title--active' : ''
				}`}>
				Projekty
			</h2>

			<div className='projects__wrapper'>
				<picture
					ref={project1}
					className={`project ${inView1 ? 'project--active' : ''}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>A painting for today</h2>
						<p className='project__tech'>React | TypeScript | SCSS</p>
						<a
							href='https://grzegorzwirtek.github.io/a-painting-for-you/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='painting.png' />
					<source
						media={`(min-width: ${SIZE_MEDIUM})`}
						srcSet='painting-medium.png'
					/>

					<img
						src='painting-min.png'
						alt='Projekt Painting'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project2}
					className={`project project--delay-2 ${
						inView2 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Sudoku</h2>
						<p className='project__tech'>HTML5 | SCSS | JavaScript</p>
						<a
							href='https://sudoku-with-login.herokuapp.com/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='sudoku.png' />
					<img
						src='sudoku-min.png'
						alt='Projekt Sudoku'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project3}
					className={`project project--delay-1 ${
						inView3 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Czas na świecie</h2>
						<p className='project__tech'>React | TypeScript | SCSS</p>
						<a
							href='https://grzegorzwirtek.github.io/time-in-the-world/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='time.png' />
					<img
						src='time-min.png'
						alt='Projekt Czas na świecie'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project4}
					className={`project project--delay-2 ${
						inView4 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Blog</h2>
						<p className='project__tech'>
							React | TypeScript | Redux | Axios | CSS
						</p>
						<a
							href='https://grzegorzwirtek.github.io/mern-blog-client/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='blog.png' />
					<source
						media={`(min-width: ${SIZE_MEDIUM})`}
						srcSet='blog-medium.png'
					/>
					<img
						src='blog-min.png'
						alt='Projekt Blog'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project5}
					className={`project ${inView5 ? 'project--active' : ''}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>TV series</h2>
						<p className='project__tech'>React | Axios | SCSS</p>
						<a
							href='https://grzegorzwirtek.github.io/tv-series/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='tv.png' />
					<source
						media={`(min-width: ${SIZE_MEDIUM})`}
						srcSet='tv-medium.png'
					/>
					<img
						src='tv-min.png'
						alt='Projekt TV series'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project6}
					className={`project project--delay-2 ${
						inView6 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Jakość powietrza</h2>
						<p className='project__tech'>React | SCSS | Axios</p>
						<a
							href='https://grzegorzwirtek.github.io/air-quality-app/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>
					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='air.png' />
					<img
						src='air-min.png'
						alt='Projekt Czas na świecie'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project7}
					className={`project project--delay-1 ${
						inView7 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Wydatki</h2>
						<p className='project__tech'>React | TypeScript | SCSS</p>
						<a
							href='https://grzegorzwirtek.github.io/wydatki/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='expenses.png' />
					<img
						src='expenses-min.png'
						alt='Projekt Czas na świecie'
						className='project__image'
					/>
				</picture>

				<picture
					ref={project8}
					className={`project project--delay-2 ${
						inView8 ? 'project--active' : ''
					}`}>
					<div className='project__curtain'>
						<h2 className='project__title'>Pogoda w Polsce</h2>
						<p className='project__tech'>HTML5 | SCSS | JavaScript</p>
						<a
							href='https://grzegorzwirtek.github.io/weather-forecast/'
							target='blank'
							className='project__href'>
							Odwiedź stronę
						</a>
					</div>

					<source media={`(min-width: ${SIZE_LARGE})`} srcSet='weather.png' />
					<source
						media={`(min-width: ${SIZE_MEDIUM})`}
						srcSet='weather-medium.png'
					/>
					<img
						src='weather-min.png'
						alt='Projekt Pogoda'
						className='project__image'
					/>
				</picture>
			</div>
		</section>
	);
};

export default Projects;
export {};
