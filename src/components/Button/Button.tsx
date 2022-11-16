import './Button.scss';

type ButtonProps = {
	children: string;
	handleClick: () => void;
};

const Button = ({ children, handleClick }: ButtonProps) => {
	return (
		<button onClick={handleClick} className='btn'>
			{children}
		</button>
	);
};
export default Button;
