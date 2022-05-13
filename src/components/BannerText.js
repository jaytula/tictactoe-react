const BannerText = ({ gameType, winner, player1 }) => {
	return (
		<p>
			{gameType === 'cpu' &&
				winner !== 'tie' &&
				winner === player1 &&
				`YOU WON!`}
			{gameType === 'cpu' &&
				winner !== 'tie' &&
				winner !== player1 &&
				`OH NO, YOU LOST...`}
			{gameType === 'pvp' &&
				winner !== 'tie' &&
				winner === player1 &&
				`PLAYER 1 WINS!`}
			{gameType === 'pvp' &&
				winner !== 'tie' &&
				winner !== player1 &&
				`PLAYER 2 WINS!`}
		</p>
	)
}

export default BannerText
