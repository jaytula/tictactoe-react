import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import GridItem from './GridItem'
import logo from '../assets/logo.svg'
import greyX20 from '../assets/icon-x-20.svg'
import greyO20 from '../assets/icon-o-20.svg'
import restart from '../assets/icon-restart.svg'

const Game = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const player1 = location.state.player1
	const gameType = location.state.gameType
	const shouldReset = location.state.shouldReset
	const [turn, setTurn] = useState(player1)
	const [cells, setCells] = useState(Array(9).fill(''))
	const [winner, setWinner] = useState(null)
	const [reset, setReset] = useState(false)

	useEffect(() => {
		if (winner !== null) {
			navigate('/gameover', { state: { player1, gameType } })
			setWinner(null)
		}
	}, [winner, navigate, player1, gameType])

	useEffect(() => {
		if (reset) {
			setWinner(null)
			setCells(Array(9).fill(''))
			setTurn(player1)
		}
		setReset(false)
	}, [reset, player1])

	useEffect(() => {
		if (shouldReset) setReset(true)
	}, [shouldReset])

	const checkForWinner = (squares) => {
		let combinations = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		}

		for (let combo in combinations) {
			combinations[combo].forEach((pattern) => {
				if (
					squares[pattern[0]] === '' ||
					squares[pattern[1]] === '' ||
					squares[pattern[2]] === ''
				) {
					// do nothing
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]])
				}
			})
		}
	}

	const switchTurn = (num) => {
		if (cells[num] !== '') {
			console.log('Already clicked')
			return
		}
		let squares = [...cells]
		if (turn === 'x') {
			squares[num] = 'x'
			setTurn('o')
		} else {
			squares[num] = 'o'
			setTurn('x')
		}
		checkForWinner(squares)
		setCells(squares)
	}

	return (
		<div className='container container-gs'>
			<div className='game-top'>
				<img className='logo' src={logo} alt='xo logo'></img>
				<div className='turn'>
					<img src={turn === 'x' ? greyX20 : greyO20} alt=''></img>
					<p>TURN</p>
				</div>
				<div className='restart' onClick={() => setReset(true)}>
					<img src={restart} alt=''></img>
				</div>
			</div>

			<div className='tiles-grid'>
				<GridItem turn={turn} switchTurn={switchTurn} num={0} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={1} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={2} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={3} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={4} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={5} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={6} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={7} cells={cells} />
				<GridItem turn={turn} switchTurn={switchTurn} num={8} cells={cells} />
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
			<div>Winner: {winner}</div>
		</div>
	)
}

export default Game
