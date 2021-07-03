import React from 'react'

export default function Header({elem, swipe}) {
	return (
		<header>
			<img 
				src='assets/img/home-button.png' 
				alt='home'
				className='home-button'
				onPointerDown={(e) => e.preventDefault()} 
				onClick={() => swipe(elem.current, 'right', true)} />
			<img 
				src='assets/img/home-line.png' 
				alt='line'
				className='home-line'
				onPointerDown={(e) => e.preventDefault()} />
			<p>Project</p>
			<button onClick={() => swipe(elem.current, 'right')}>&#8592;</button>
			<button onClick={() => swipe(elem.current, 'left')}>&#8594;</button>
		</header>
	)
}
