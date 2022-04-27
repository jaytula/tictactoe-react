import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import GridItem from './GridItem'
import logo from '../assets/logo.svg'
import greyX20 from '../assets/icon-x-20.svg'
import greyO20 from '../assets/icon-o-20.svg'
import restart from '../assets/icon-restart.svg'

const Game = () => {
	const location = useLocation()
	const isVsPlayer = location.state.isVsPlayer
	const [isCurrentTurnX, setIsCurrentTurnX] = useState(true)
	const propTest = () => {
		console.log('test success!')
	}

	return (
		<div className='container container-gs'>
			<div className='game-top'>
				<img className='logo' src={logo} alt='xo logo'></img>
				<div className='turn'>
					<img src={isCurrentTurnX ? greyX20 : greyO20} alt=''></img>
					<p>
						<Link to='/gameover'>TURN</Link>
					</p>
				</div>
				<div className='restart'>
					<img src={restart} alt=''></img>
				</div>
			</div>

			<div className='tiles-grid'>
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
				<GridItem isCurrentTurnX={isCurrentTurnX} onMyClick={propTest} />
			</div>

			<div className='scores'>
				<div className='blue-pri'>
					<p>X (YOU)</p>
					<p>0</p>
				</div>
				<div className='light-pri'>
					<p>TIES</p>
					<p>0</p>
				</div>
				<div className='yellow-pri'>
					<p>O (CPU)</p>
					<p>0</p>
				</div>
			</div>
		</div>
	)
}

export default Game
