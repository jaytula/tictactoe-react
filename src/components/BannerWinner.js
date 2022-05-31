import yellowO64 from '../assets/icon-o.svg';
import blueX64 from '../assets/icon-x.svg';

const BannerWinner = ({ winner }) => {
	return (
		<div>
			{winner === 'o' && (
				<>
					<img src={yellowO64} alt='' />
					<div className='banner-div-yellow banner-heading'>
						TAKES THE ROUND
					</div>
				</>
			)}
			{winner === 'x' && (
				<>
					<img src={blueX64} alt='' />
					<div className='banner-div-blue banner-heading'>TAKES THE ROUND</div>
				</>
			)}
			{winner === 'tie' && (
				<div className='banner-div-tie banner-heading'>ROUND TIED</div>
			)}
			{winner === 'reset' && (
				<div className='banner-div-tie banner-heading'>RESTART GAME?</div>
			)}
		</div>
	);
};

export default BannerWinner;
