import GridXOutline from './GridXOutline'
import GridX from './GridX'
import GridOOutline from './GridOOutline'
import GridO from './GridO'
import { useState } from 'react'

const GridItem = ({ turn, switchTurn, num, cells }) => {
	const [isHover, setIsHover] = useState(false)
	const [isOn, setIsOn] = useState(false)

	const handleClick = (num) => switchTurn(num)

	return (
		<div
			onMouseEnter={() => setIsHover(true)}
			onMouseLeave={() => setIsHover(false)}
			onClick={() => handleClick(num)}
		>
			{/* {isHover && (turn ? <GridXOutline /> : <GridOOutline />)} */}
			{/* {isOn && (turn ? <GridX /> : <GridO />)} */}
			{/* {(() => {
				if (isOn) {
					return turn ? <GridX /> : <GridO />
				} else if (isHover) {
					return turn ? <GridXOutline /> : <GridOOutline />
				}
			})()} */}
			{/* {cells[num]} */}
			{(() => {
				if (cells[num] === 'x') {
					return <GridX />
				} else if (cells[num] === 'o') {
					return <GridO />
				} else if (isHover && turn === 'x') {
					return <GridXOutline />
				} else if (isHover && turn === 'o') {
					return <GridOOutline />
				}
			})()}
		</div>
	)
}

export default GridItem
