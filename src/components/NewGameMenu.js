import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import greyX32 from '../assets/icon-x-32-grey.svg'
import greyO32 from '../assets/icon-o-32-grey.svg'
import darkGreyX32 from '../assets/icon-x-32-dark-grey.svg'
import darkGreyO32 from '../assets/icon-o-32-dark-grey.svg'
import { useState } from 'react'
const onOffBtns = document.querySelectorAll('.btn-svg')
// const isOn = (button) => {
// 	if (button.classList.contains('btn-on')) return true
// 	else return false
// }
// hello
const NewGameMenu = () => {
	const [isOPlayer1, setIsOPlayer1] = useState(true)
	// const [btnX, setBtnX] = useState(onOffBtns[0])
	// const [btnO, setBtnO] = useState(onOffBtns[1])
	const onClick = () => {
		if (onOffBtns[0].classList.contains('btn-off')) {
			onOffBtns[0].classList.remove('btn-off')
			onOffBtns[0].classList.add('btn-on')
		} else {
			onOffBtns[0].classList.remove('btn-on')
			onOffBtns[0].classList.add('btn-off')
		}
		if (onOffBtns[1].classList.contains('btn-off')) {
			onOffBtns[1].classList.remove('btn-off')
			onOffBtns[1].classList.add('btn-on')
		} else {
			onOffBtns[1].classList.remove('btn-on')
			onOffBtns[1].classList.add('btn-off')
		}
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
						<button className='btn btn-svg btn-off' onClick={onClick}>
							{isOPlayer1 ? (
								<img src={greyX32} alt='' />
							) : (
								<img src={darkGreyX32} alt='' />
							)}
						</button>
						<button className='btn btn-svg btn-on' onClick={onClick}>
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
