import React from 'react'

const ThemeSwitcher = ({ setTheme }) => {
    return (
        <div className='theme-switcher'>
            <button onClick={() => setTheme('light')}>Light</button>
            <button onClick={() => setTheme('dark')}>Dark</button>
            <button onClick={() => setTheme('sepia')}>Sepia</button>
        </div>
    )
}

export default ThemeSwitcher
