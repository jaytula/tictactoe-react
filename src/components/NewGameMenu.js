import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import greyX32 from '../assets/icon-x-32-grey.svg';
import greyO32 from '../assets/icon-o-32-grey.svg';
import darkGreyX32 from '../assets/icon-x-32-dark-grey.svg';
import darkGreyO32 from '../assets/icon-o-32-dark-grey.svg';
import { useState, useEffect } from 'react';

const NewGameMenu = () => {
	const navigate = useNavigate();
	const [player1, setPlayer1] = useState('o');
	const [gameType, setGameType] = useState('default');

	const onClick = () => {
		if (player1 === 'x') {
			setPlayer1('o');
		} else {
			setPlayer1('x');
		}
	};

	useEffect(() => {
		if (gameType === 'cpu' || gameType === 'pvp') {
			navigate('/game', { state: { player1, gameType } });
		}
	}, [gameType, player1, navigate]);

	return (
		<div className='container'>
			<div className='logo-container'>
				<img src={logo} alt='xo logo'></img>
			</div>

			<div className='card-landing'>
				<p>PICK PLAYER 1'S MARK</p>

				<div className='btn-xo-container'>
					<div className='btn-xo'>
						<button
							className={
								player1 === 'o'
									? 'btn btn-svg btn-x-off'
									: 'btn btn-svg btn-x-on'
							}
							onClick={onClick}
							// style={
							// 	player1 === 'o'
							// 		? { backgroundColor: '#1A2A33' }
							// 		: { backgroundColor: '#A8BFC9' }
							// }
						>
							{player1 === 'o' ? (
								<img src={greyX32} alt='' />
							) : (
								<img src={darkGreyX32} alt='' />
							)}
						</button>
						<button
							className={
								player1 === 'o'
									? 'btn btn-svg btn-o-on'
									: 'btn btn-svg btn-o-off'
							}
							onClick={onClick}
							// style={
							// 	player1 === 'o'
							// 		? { backgroundColor: '#A8BFC9' }
							// 		: { backgroundColor: '#1A2A33' }
							// }
						>
							{player1 === 'o' ? (
								<img src={darkGreyO32} alt='' />
							) : (
								<img src={greyO32} alt='' />
							)}
						</button>
					</div>
				</div>

				<p>REMEMBER: X GOES FIRST</p>
			</div>

			<div className='container-btn'>
				<button
					className='btn btn-ng btn-yellow'
					onClick={() => setGameType('cpu')}
				>
					NEW GAME (VS CPU)
				</button>
				<button
					className='btn btn-ng btn-blue'
					onClick={() => setGameType('pvp')}
				>
					NEW GAME (VS PLAYER)
				</button>
			</div>
		</div>
	);
};

export default NewGameMenu;
