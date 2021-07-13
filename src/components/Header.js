import React from 'react'

export default function Header({elem, swipe}) {
	return (
		<header>
			<img 
				src='assets/img/home-button.png' 
				alt='home'
				className='home-button'
				onClick={() => swipe(elem.current, 'right', true)} />
			<img 
				src='assets/img/home-line.png' 
				alt='line'
				className='home-line' />
			<p>Project</p>
		</header>
	)
}
