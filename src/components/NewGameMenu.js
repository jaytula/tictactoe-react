import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import greyX32 from '../assets/icon-x-32-grey.svg'
import greyO32 from '../assets/icon-o-32-grey.svg'
import darkGreyX32 from '../assets/icon-x-32-dark-grey.svg'
import darkGreyO32 from '../assets/icon-o-32-dark-grey.svg'
import { useState, useEffect } from 'react'
const buttonX = document.querySelector('.btn-x')
const buttonO = document.querySelector('.btn-o')

const NewGameMenu = () => {
	const [isOPlayer1, setIsOPlayer1] = useState(true)

	// useEffect(() => {
	// 	setbtnXBg(!btnXBg)
	// 	setbtnOBg(!btnOBg)
	// }, [btnXBg, btnOBg])

	const onClick = () => {
		setIsOPlayer1(!isOPlayer1)
	}

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
								isOPlayer1
									? { backgroundColor: '#1A2A33' }
									: { backgroundColor: '#A8BFC9' }
							}
						>
							{isOPlayer1 ? (
								<img src={greyX32} alt='' />
							) : (
								<img src={darkGreyX32} alt='' />
							)}
						</button>
						<button
							className='btn btn-svg btn-o'
							onClick={onClick}
							style={
								isOPlayer1
									? { backgroundColor: '#A8BFC9' }
									: { backgroundColor: '#1A2A33' }
							}
						>
							{isOPlayer1 ? (
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
				<button className='btn btn-ng btn-yellow'>
					<Link to='/game'>NEW GAME (VS CPU)</Link>
				</button>
				<button className='btn btn-ng btn-blue'>
					<Link to='/game'>NEW GAME (VS PLAYER)</Link>
				</button>
			</div>
		</div>
	)
}

export default NewGameMenu
