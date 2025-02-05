import React, { useState, useEffect } from 'react'
import VideoPlayer from './src/components/VideoPlayer'
import DownloadButton from './src/components/DownloadButton'
import ThemeSwitcher from './src/components/ThemeSwitcher'
import './src/styles.css'

const App = () => {
	const defaultUrl = 'https://filedn.eu/lPq6O1K7j8DR1n7JwTuYjYz/7ooOOKjskks39jdhhdooommcooodkkywrrqbnx.mp4'
	const [theme, setTheme] = useState('dark')
	const [videoUrl, setVideoUrl] = useState('')
	const [currentVideoUrl, setCurrentVideoUrl] = useState(defaultUrl)

	useEffect(() => {
		document.body.className = theme
	}, [theme])

	const handleUrlChange = event => {
		setVideoUrl(event.target.value)
	}

	const handleInputHover = async () => {
		try {
			const text = await navigator.clipboard.readText()
			setVideoUrl(text)
		} catch (err) {
			console.error('Failed to read clipboard contents: ', err)
		}
	}

	const loadVideo = () => {
		setCurrentVideoUrl(videoUrl || defaultUrl)
	}

	const handleKeyPress = event => {
		if (event.key === 'Enter') {
			loadVideo()
		}
	}

	return (
		<div className='app'>
			<h1></h1>
			<div className='video-url-input'>
				<input
					type='text'
					value={videoUrl}
					onChange={handleUrlChange}
					onMouseEnter={handleInputHover}
					onKeyPress={handleKeyPress}
					placeholder='Wentyluj frustrację, wklej link do filmu!'
				/>
				<button onClick={loadVideo}>Załaduj</button>
			</div>
			<div className='video-player'>
				<video controls key={currentVideoUrl}>
					<source src={currentVideoUrl} type='video/mp4' />
					Twoja przeglądarka nie obsługuje odtwarzacza wideo.
				</video>
			</div>
			<div className='controls'>
				<ThemeSwitcher setTheme={setTheme} />
				<DownloadButton videoUrl={currentVideoUrl} />
			</div>
		</div>
	)
}

export default App
