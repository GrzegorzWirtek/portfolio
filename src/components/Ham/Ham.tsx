import './Ham.scss';

type HamProps = { click: () => void; navVisible: boolean };

const Ham = ({ click, navVisible }: HamProps) => {
	return (
		<div className='ham' onClick={click}>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
			<div
				className={`ham__item ${navVisible ? 'ham__item--active' : ''}`}></div>
		</div>
	);
};

export default Ham;
export {};
