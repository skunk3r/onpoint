import React from 'react'

export default function BottlePage({onClick}) {
	return (
		<div className='content'>
			<div className='flex-row'>
				<div id='bottle-div'></div>
				<div className='flex-box mg-top'>
					<h2>Ключевое сообщение</h2>
					<h1 className='brand'>BREND<strong>XY</strong></h1>
					<div className='flex-row details-boxes'>
						<img src="assets/img/icon.png" alt="icon" className='icon' />
						<p className='details-box first'>
							3 раза в день после 
							еды. После приема 
							препарата рекомендуется воздержаться 
							от пищи и напитков 
							в течение 1 часа 
						</p>
						<div className='flex-column'>
							<img src="assets/img/icon-2.png" alt="icon" className='icon' />
							<p className='details-box second'>
								Курс лечения от 
								7 дней до 1 мес.
							</p>
							<button id='details-button' onClick={onClick}>
								<img src='assets/img/details.png' alt='details' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
