import GridXOutline from './GridXOutline'
import GridX from './GridX'
import GridOOutline from './GridOOutline'
import GridO from './GridO'
import { useState } from 'react'

const GridItem = ({ turn, switchTurn, num, cells }) => {
	const [isHover, setIsHover] = useState(false)
	const [isOn, setIsOn] = useState(false)

	const handleClick = (num) => {
		setIsOn(true)
		switchTurn(num)
	}

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
			{cells[num]}
		</div>
	)
}

export default GridItem
