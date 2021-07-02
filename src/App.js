import React, {useRef, useState, useCallback, useEffect} from 'react'
import Hello from './components/Hello.js'
import Header from './components/Header.js'
import Info from './components/Info.js'
import BottlePage from './components/BottlePage.js'
import Modal from './components/Modal.js'

export default function App() {

	const documentWrapper = useRef(null);
	const [modal, setModal] = useState(false);

	function toggleModal() {
		setModal(!modal);
	}

	let margin = 0;
	let width = 1600;
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
		}

		if (dir === 'right') {
			margin += width;
			margin = toHome ? 0: Math.min(margin, 0);
			backgroundPos += newPos;
			backgroundPos = toHome ? 0: Math.min(backgroundPos, 0);
		}	

		document.body.style.backgroundPositionX = backgroundPos + 'px';
		element.style.marginLeft = margin + 'px';
	}, [])

	let eventStart;
	let eventEnd

	const onDown = useCallback((event) => {
		event.preventDefault()

		eventStart = event.clientX;
	}, [])

	const onUp = useCallback((event) => {
		eventEnd = event.clientX;
		if (eventEnd - eventStart > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'right')
			else if (eventStart - eventEnd > document.documentElement.clientWidth * 0.15) swipe(documentWrapper.current, 'left');
	}, [])

	useEffect(() => {
		document.addEventListener('pointerdown', onDown);
		document.addEventListener('pointerup', onUp);
	}, [])

	const addListeners = useCallback(() => {
		document.addEventListener('pointerdown', onDown);
		document.addEventListener('pointerup', onUp);
	}, [])

	const removeListeners = useCallback(() => {
		document.removeEventListener('pointerdown', onDown);
		document.removeEventListener('pointerup', onUp);
	}, [])

	return (
		<div id='wrapper'>

			<Header elem={documentWrapper} swipe={swipe} />

			{modal && <Modal onClick={toggleModal} addListeners={addListeners} />}
			{modal && removeListeners()}

			<div id='flex-wrapper' ref={documentWrapper}>

				<Hello elem={documentWrapper} swipe={swipe} />

				<Info />

				<BottlePage onClick={toggleModal}/>

			</div>
		</div>
	)
}
