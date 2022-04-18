import logo from '../assets/logo.svg'
import greyX20 from '../assets/icon-x-20.svg'
import restart from '../assets/icon-restart.svg'

const Game = () => {
	return (
		<div class='container container-gs'>
			<div class='game-top'>
				<img class='logo' src={logo} alt='xo logo'></img>
				<div class='turn'>
					<img src={greyX20} alt=''></img>
					<p>TURN</p>
				</div>
				<div class='restart'>
					<img src={restart} alt=''></img>
				</div>
			</div>

			<div class='tiles-grid'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>

			<div class='scores'>
				<div class='blue-pri'>
					<p>X (YOU)</p>
					<p>0</p>
				</div>
				<div class='light-pri'>
					<p>TIES</p>
					<p>0</p>
				</div>
				<div class='yellow-pri'>
					<p>O (CPU)</p>
					<p>0</p>
				</div>
			</div>
		</div>
	)
}

export default Game
