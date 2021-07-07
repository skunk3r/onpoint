import React, {useRef, useState, useCallback, useEffect} from 'react'
import Header from './components/Header.js'
import HelloSlide from './components/HelloSlide.js'
import InfoSlide from './components/InfoSlide.js'
import BottleSlide from './components/BottleSlide.js'
import Footer from './components/Footer.js'
import Modal from './components/Modal.js'

export default function App() {

	const documentWrapper = useRef(null);
	const [modal, setModal] = useState(false);
	const [classes, setClasses] = useState('');

	let margin = 0;
	let width = 100;
	let pages = 3;
	let backgroundPos = 0;
	let backgroundXMax = 3209;
	let newPos = backgroundXMax / 3;
	let backgroundPosMax = backgroundXMax - newPos;

	const swipe = useCallback((element, dir, toHome) => {
		if (dir === 'left') {
			margin -= width;
			margin = Math.max(margin, - (width * (pages - 1)));
			backgroundPos -= newPos;
			backgroundPos = Math.max(backgroundPos, -backgroundPosMax);
			
			if (margin === -100) {
				removeClasses()
				setTimeout(animateSecondSlide, 100)
			}
		}

		if (dir === 'right') {
			margin += width;
			margin = toHome ? 0: Math.min(margin, 0);
			backgroundPos += newPos;
			backgroundPos = toHome ? 0: Math.min(backgroundPos, 0);
		}	

		document.body.style.backgroundPositionX = backgroundPos + 'px';
		element.style.marginLeft = margin + '%';
	}, [])

	let eventStart;
	let eventEnd;
	let isIgnored = useCallback(false, []);

	const onPointerDown = useCallback((event) => {
		event.preventDefault();

		let isModal = document.querySelector('#modal');

		if (event.target.id === 'thumb' || event.target.id === 'slider' || isModal) {
			isIgnored = true;
			return;
		} 

		isIgnored = false;

		eventStart = event.clientX;
	}, [])

	const onPointerUp = useCallback((event) => {
		if (isIgnored) return;

		eventEnd = event.clientX;

		if (eventEnd - eventStart > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'right')
			else if (eventStart - eventEnd > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'left');
	}, [])


	const onTouchEnd = useCallback((event) => {
		if (isIgnored) return;

		eventEnd = event.changedTouches[0].clientX;
		
		if (eventEnd - eventStart > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'right')
			else if (eventStart - eventEnd > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'left');

		return false;
	}, [])

	function toggleModal() {
		setModal(!modal);
	}

	function animateSecondSlide() {
		setClasses('sperm-squad-go');
	}

	function removeClasses() {
		setClasses('');
	}

	useEffect(() => {
		document.addEventListener('touchend', onTouchEnd);
		document.addEventListener('pointerdown', onPointerDown);
		document.addEventListener('pointerup', onPointerUp);
	}, [])

	return (
		<div id='wrapper'>
			<div id='rotate'>
				<p>Поверните ваше устройство</p>
			</div>

			{modal && <Modal onClick={toggleModal} />}
			
			<Header elem={documentWrapper} swipe={swipe} />

			<div id='flex-wrapper' ref={documentWrapper}>

				<HelloSlide elem={documentWrapper} swipe={swipe} />

				<InfoSlide classes={classes} />

				<BottleSlide onClick={toggleModal}/>

			</div>

			<Footer />
		</div>
	)
}
