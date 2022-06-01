import GridXOutline from './GridXOutline';
import GridX from './GridX';
import GridOOutline from './GridOOutline';
import GridO from './GridO';
import { useState } from 'react';
import darkO64 from '../assets/icon-o-dark.svg';
import darkX64 from '../assets/icon-x-dark.svg';

const GridItem = ({ turn, switchTurn, num, cells }) => {
	const [isHover, setIsHover] = useState(false);
	// const [isOn, setIsOn] = useState(false)

	const handleClick = (num) => switchTurn(num);

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => handleClick(num)}
			className={
				cells[num] === 'xWinner'
					? 'grid-winner-x'
					: cells[num] === 'oWinner'
					? 'grid-winner-o'
					: 'grid-normal'
			}
		>
			{(() => {
				if (cells[num] === 'x') {
					return <GridX />;
				} else if (cells[num] === 'o') {
					return <GridO />;
				} else if (isHover && turn === 'x') {
					return <GridXOutline />;
				} else if (isHover && turn === 'o') {
					return <GridOOutline />;
				} else if (cells[num] === 'xWinner') {
					return (
						<div className='center'>
							<img src={darkX64} alt=''></img>
						</div>
					);
				} else if (cells[num] === 'oWinner') {
					return (
						<div className='center'>
							<img src={darkO64} alt=''></img>
						</div>
					);
				}
			})()}
		</div>
	);
};

export default GridItem;
