import './App.css'
import Game from './components/Game'
import NewGameMenu from './components/NewGameMenu'
import Banner from './components/Banner'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<NewGameMenu />} />
				<Route path='/game' element={<Game />} />
				<Route
					path='/gameover'
					element={
						<>
							<Game />
							<Banner />
						</>
					}
				/>
			</Routes>
		</Router>
	)
}

export default App
