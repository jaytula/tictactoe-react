import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import greyX32 from '../assets/icon-x-32-grey.svg'
import greyO32 from '../assets/icon-o-32-grey.svg'
import darkGreyX32 from '../assets/icon-x-32-dark-grey.svg'
import darkGreyO32 from '../assets/icon-o-32-dark-grey.svg'
import { useState } from 'react'

const NewGameMenu = () => {
	const [player1, setPlayer1] = useState('o')
	console.log(player1)
	// const [isVsPlayer, setIsVsPlayer] = useState(false)
	const onClick = () => {
		if (player1 === 'x') {
			setPlayer1('o')
			console.log(player1)
		} else {
			setPlayer1('x')
			console.log(player1)
		}
	}

	const [shouldRedirect, setShouldRedirect] = useState(false)

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
							className='btn btn-svg btn-x'
							onClick={onClick}
							style={
								player1 === 'o'
									? { backgroundColor: '#1A2A33' }
									: { backgroundColor: '#A8BFC9' }
							}
						>
							{player1 === 'o' ? (
								<img src={greyX32} alt='' />
							) : (
								<img src={darkGreyX32} alt='' />
							)}
						</button>
						<button
							className='btn btn-svg btn-o'
							onClick={onClick}
							style={
								player1 === 'o'
									? { backgroundColor: '#A8BFC9' }
									: { backgroundColor: '#1A2A33' }
							}
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
					// onClick={() => setIsVsPlayer(false)}
				>
					<Link to='/game' state={{ player1, shouldRedirect }}>
						NEW GAME (VS CPU)
					</Link>
				</button>
				<button
					className='btn btn-ng btn-blue'
					// onClick={() => setIsVsPlayer(true)}
				>
					<Link to='/game' state={{ player1, shouldRedirect }}>
						NEW GAME (VS PLAYER)
					</Link>
				</button>
			</div>
		</div>
	)
}

export default NewGameMenu
