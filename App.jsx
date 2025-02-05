import React, { useState, useEffect } from 'react'
import VideoPlayer from './src/components/VideoPlayer'
import DownloadButton from './src/components/DownloadButton'
import ThemeSwitcher from './src/components/ThemeSwitcher'
import './src/styles.css'

const App = () => {
	const [theme, setTheme] = useState('dark')

	// Dodaj klasę motywu do <body>
	useEffect(() => {
		document.body.className = theme
	}, [theme])

	return (
		<div className='app'>
			<h1></h1>
			<div className='video-player'>
				<video controls>
					<source
						src='https://filedn.eu/lPq6O1K7j8DR1n7JwTuYjYz/7ooOOKjskks39jdhhdooommcooodkkywrrqbnx.mp4'
						type='video/mp4'
					/>
					Twoja przeglądarka nie obsługuje odtwarzacza wideo.
				</video>
			</div>
			<div className='theme-switcher'>
				<button onClick={() => setTheme('light')}>Light</button>
				<button onClick={() => setTheme('dark')}>Dark</button>
				<button onClick={() => setTheme('sepia')}>Sepia</button>
			</div>
		</div>
	)
}

export default App
