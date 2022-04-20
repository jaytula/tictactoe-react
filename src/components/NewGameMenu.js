import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import greyX32 from '../assets/icon-x-32-grey.svg'
import darkGreyO32 from '../assets/icon-o-32-dark-grey.svg'

const NewGameMenu = () => {
	return (
		<div class='container'>
			<div class='logo-container'>
				<img src={logo} alt='xo logo'></img>
			</div>

			<div class='card-landing'>
				<p>PICK PLAYER 1'S MARK</p>

				<div class='btn-xo-container'>
					<div class='btn-xo'>
						<button class='btn btn-svg btn-x'>
							{<img src={greyX32} alt='' />}
						</button>

						<button class='btn btn-svg btn-o'>
							{<img src={darkGreyO32} alt='' />}
						</button>
					</div>
				</div>

				<p>REMEMBER: X GOES FIRST</p>
			</div>

			<div class='container-btn'>
				<button class='btn btn-ng btn-yellow'>
					<Link to='/game'>NEW GAME (VS CPU)</Link>
				</button>
				<button class='btn btn-ng btn-blue'>
					<Link to='/game'>NEW GAME (VS PLAYER)</Link>
				</button>
			</div>
		</div>
	)
}

export default NewGameMenu
