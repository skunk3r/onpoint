import React from 'react'

export default function Hello({elem, swipe}) {
	return (
		<div className='content mg-top'>
			<h2>Привет,</h2>
			<h1 className='title'>
				Это <strong>не</strong> <br />коммерческое <br />задание
				<button id='whats-next-button' onClick={() => swipe(elem.current, 'left')}>
					<img 
						src='img/whats-next-button.png' 
						alt='next' 
						onPointerDown={(e) => e.preventDefault()} />
				</button>
			</h1>
		</div>
	)
}
