const ThemeSwitcher = ({ onChangeTheme }) => {
	return (
		<div className='theme-switcher'>
			<button onClick={() => onChangeTheme('light')}>Light</button>
			<button onClick={() => onChangeTheme('dark')}>Dark</button>
			<button onClick={() => onChangeTheme('sepia')}>Sepia</button>
		</div>
	)
}

export default ThemeSwitcher
