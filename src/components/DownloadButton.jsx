const DownloadButton = ({ videoUrl }) => {
	const handleDownload = () => {
		const link = document.createElement('a')
		link.href = videoUrl
		link.download = 'video.mp4'
		document.body.appendChild(link)
		link.click()
		document.body.removeChild(link)
	}

	return (
		<button onClick={handleDownload} className='download-button'>
			Pobierz wideo
		</button>
	)
}

export default DownloadButton
