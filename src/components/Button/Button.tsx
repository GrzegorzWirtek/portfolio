import './Button.scss';

type Props = {
	children: string;
	handleClick: () => void;
};

const Button: React.FC<Props> = ({ children, handleClick }) => {
	return (
		<button onClick={handleClick} className='btn'>
			{children}
		</button>
	);
};
export default Button;
