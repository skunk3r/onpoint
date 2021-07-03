import React from 'react'

export default function Header({elem, swipe}) {
	return (
		<header>
			<img 
				src='../../src/assets/img/home.png' 
				alt='home' 
				useMap='#navigation' 
				onPointerDown={(e) => e.preventDefault()} />
			<map name="navigation">
				<area 
					onClick={() => swipe(elem.current, 'right', true)} 
					shape='rect' coords='0,0, 21,27' 
					nohref='true' alt='home' />
			</map>
			<button onClick={() => swipe(elem.current, 'right')}>&#8592;</button>
			<button onClick={() => swipe(elem.current, 'left')}>&#8594;</button>
		</header>
	)
}
