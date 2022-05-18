import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import BannerText from './BannerText'
import BannerWinner from './BannerWinner'

const Banner = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const player1 = location.state.player1
	const gameType = location.state.gameType
	const winner = location.state.winner
	const score = location.state.score
	console.log(winner)
	const [shouldReset, setShouldReset] = useState(true)
	return (
		<>
			<div className='bg-darken'></div>
			<div className='banner'>
				<BannerText player1={player1} gameType={gameType} winner={winner} />
				<BannerWinner winner={winner} />
				<div>
					<button className='btn-quit' onClick={() => navigate('/')}>
						QUIT
					</button>
					<button
						className='btn-nextrnd'
						onClick={() => {
							navigate('/game', {
								state: { player1, gameType, shouldReset, score },
							})
						}}
					>
						NEXT ROUND
					</button>
				</div>
			</div>
		</>
	)
}

export default Banner
