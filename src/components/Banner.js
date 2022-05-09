import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from 'react'
import yellowO64 from '../assets/icon-o.svg'

const Banner = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const player1 = location.state.player1
	const gameType = location.state.gameType
	const [shouldReset, setShouldReset] = useState(true)
	return (
		<>
			<div className='bg-darken'></div>
			<div className='banner'>
				<div>
					<p>OH NO, YOU LOST...</p>
				</div>
				<div>
					<img src={yellowO64} alt='' />
					<h1>TAKES THE ROUND</h1>
				</div>
				<div>
					<button className='btn-quit' onClick={() => navigate('/')}>
						QUIT
					</button>
					<button
						className='btn-nextrnd'
						onClick={() => {
							navigate('/game', { state: { player1, gameType, shouldReset } })
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
