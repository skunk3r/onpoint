import React, {useState} from 'react'
import List from './List.js'

export default function Modal({onClick}) {

	const [page, setPage] = useState(1);
	const advantages = [
	'Самое важное и ключевое преимущество нашего препарата',
	'Второе по важности преимущество',
	'Ещё одно важное преимущество препарата',
	'Ещё одно не менее важное преимущество препарата',
	'Ещё одно важное преимущество препарата',
	'Ещё одно важное преимущество препарата'
	];

	function handleClick(btn) {
		if (btn === 'prev' && page != 1) setPage(1);
		if (btn === 'next' && page != 2) setPage(2);
	}

	function hightlightCircle(index) {
		if (page === index) return 'filled-circle.png'
			else return 'empty-circle.png';
	}

	return(
		<div id='modal' onPointerDown={e => e.preventDefault()}>
			<div id='modal-body'>
				<button className='close-button'>
					<img 
						src='assets/img/close-button.png' 
						alt='close' onClick={() => onClick()} />
				</button>
				<div id='animation-box'>
					<h2>Преимущества</h2>
					<h1 className='brand'>BREND<strong>XY</strong></h1>
					<div id='list-container'>

						{page === 1 && <List props={advantages} startIndex={1} endIndex={3} />}

						{page === 2 && <List props={advantages} startIndex={4} />}
					
					</div>
					<div id='pagination'>
						<button className='prev-button' onClick={() => handleClick('prev')}>
							<img src='assets/img/prev-button.png' alt='prev' />
						</button>
						<img 
							src={`assets/img/${hightlightCircle(1)}`} 
							alt='1'
							onClick={() => handleClick('prev')} />
						<img 
							src={`assets/img/${hightlightCircle(2)}`}
							alt='2'
							onClick={() => handleClick('next')} />
						<button className='next-button' onClick={() => handleClick('next')}>
							<img src='assets/img/next-button.png' alt='next' />
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
