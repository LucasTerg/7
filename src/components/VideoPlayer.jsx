const VideoPlayer = ({ videoUrl }) => {
	return (
		<div className='video-player'>
			<video controls width='100%'>
				<source src={videoUrl} type='video/mp4' />
				Twoja przeglądarka nie obsługuje odtwarzacza wideo.
			</video>
		</div>
	)
}

export default VideoPlayer
