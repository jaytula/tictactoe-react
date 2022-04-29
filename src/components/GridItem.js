import GridXOutline from './GridXOutline'
import GridX from './GridX'
import GridOOutline from './GridOOutline'
import GridO from './GridO'
import { useState } from 'react'

const GridItem = ({ isCurrentTurnX, propTest }) => {
	const [isHover, setIsHover] = useState(false)
	const [isOn, setIsOn] = useState(false)

	return (
		<div
			onMouseEnter={(e) => setIsHover(true)}
			onMouseLeave={(e) => setIsHover(false)}
			onClick={(e) => {
				setIsOn(true)
				propTest()
			}}
		>
			{/* {isHover && (isCurrentTurnX ? <GridXOutline /> : <GridOOutline />)} */}
			{/* {isOn && (isCurrentTurnX ? <GridX /> : <GridO />)} */}
			{(() => {
				if (isOn) {
					return isCurrentTurnX ? <GridX /> : <GridO />
				} else if (isHover) {
					return isCurrentTurnX ? <GridXOutline /> : <GridOOutline />
				}
			})()}
		</div>
	)
}

export default GridItem
