import React from 'react'

export default function Hello({elem, swipe}) {
	return (
		<div className='content mg-top'>
			<h2>Привет,</h2>
			<h1 className='title'>
				Это <strong>не</strong> <br />коммерческое <br />задание
				<button id='whats-next-button' onClick={() => swipe(elem.current, 'left')}>
					<img src='assets/img/whats-next-button.png' alt='next' />
				</button>
			</h1>
			<img src='assets/img/animated/bact.png' alt='bacterium' className='animated bact' />
			<img src='assets/img/animated/bact-2.png' alt='bacterium' className='animated bact' />
			<img src='assets/img/animated/bact-3.png' alt='bacterium' className='animated bact' />
			<div className='anim-div animated'>
				<img src='assets/img/animated/star-bact.png' alt='bacterium' className='star-bact' />
			</div>
			<img src='assets/img/animated/title-sperm.png' alt='sperm' className='animated title-sperm' />
		</div>
	)
}
