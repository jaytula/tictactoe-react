import GridX from './GridX'
import GridO from './GridO'
import { useState } from 'react'

const GridItem = ({ isCurrentTurnX, onMyClick }) => {
	const [isHover, setIsHover] = useState(false)
	return (
		<div
			onMouseEnter={(e) => setIsHover(true)}
			onMouseLeave={(e) => setIsHover(false)}
			onClick={onMyClick}
		>
			{isHover && (isCurrentTurnX ? <GridX /> : <GridO />)}
		</div>
	)
}

export default GridItem
