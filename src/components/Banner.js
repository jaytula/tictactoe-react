import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import BannerText from './BannerText';
import BannerWinner from './BannerWinner';

const Banner = () => {
	const location = useLocation();
	const navigate = useNavigate();
	const player1 = location.state.player1;
	const gameType = location.state.gameType;
	const winner = location.state.winner;
	const score = location.state.score;
	const [shouldReset, setShouldReset] = useState(null);

	useEffect(() => {
		if (shouldReset !== null) {
			navigate('/game', {
				state: { player1, gameType, shouldReset, score },
			});
		}
	}, [shouldReset, navigate, player1, gameType, score]);

	return (
		<>
			<div className='bg-darken'></div>
			<div className='banner'>
				<BannerText player1={player1} gameType={gameType} winner={winner} />
				<BannerWinner winner={winner} />
				{winner === 'reset' ? (
					<div>
						<button
							className='btn-quit'
							onClick={() => {
								setShouldReset(false);
							}}
						>
							NO, CANCEL
						</button>
						<button
							className='btn-nextrnd'
							onClick={() => {
								setShouldReset(true);
							}}
						>
							YES, RESTART
						</button>
					</div>
				) : (
					<div>
						<button className='btn-quit' onClick={() => navigate('/')}>
							QUIT
						</button>
						<button
							className='btn-nextrnd'
							onClick={() => {
								setShouldReset(true);
							}}
						>
							NEXT ROUND
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default Banner;
