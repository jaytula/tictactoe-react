import yellowO64 from '../assets/icon-o.svg'

const Banner = () => {
	return (
		<>
			<div className='bg-darken'></div>
			<div className='banner'>
				<div>
					<p>OH NO, YOU LOST...</p>
				</div>
				<div>
					<img src={yellowO64} alt='' />
					<h1>TAKES THE ROUND</h1>
				</div>
				<div>
					<button className='btn-quit'>QUIT</button>
					<button className='btn-nextrnd'>NEXT ROUND</button>
				</div>
			</div>
		</>
	)
}

export default Banner
