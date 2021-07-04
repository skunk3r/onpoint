import React, {useRef, useEffect, useCallback, useState} from 'react'

export default function Info({removeListeners, addListeners}) {

	const refSlider = useRef(null);
	const refThumb = useRef(null);
	const refCutter = useRef(null);
	const refInfo = useRef(null);
	const coef = useRef(null);
	const [resize, setResize] = useState(null);
	
	let shiftY;

	const onTouchMove = useCallback((event) => {
		let botBorder = refSlider.current.offsetHeight - refThumb.current.offsetHeight + 1;
		let newPosY = event.target === refSlider.current ? 
		event.touches[0].clientY - refSlider.current.getBoundingClientRect().top - refThumb.current.offsetHeight / 2 : 
		event.touches[0].clientY - shiftY - refSlider.current.getBoundingClientRect().top;
		
		newPosY = newPosY < -1 ? -1 : newPosY;
		newPosY = newPosY > botBorder ? botBorder : newPosY;
		refThumb.current.style.top = newPosY + 'px';

		refInfo.current.style.marginTop = - newPosY * coef.current + 'px';
		return false;
	}, [])

	const onPointerMove = useCallback((event) => {
		let botBorder = refSlider.current.offsetHeight - refThumb.current.offsetHeight + 1;
		let newPosY = event.target === refSlider.current ? 
		event.clientY - refSlider.current.getBoundingClientRect().top - refThumb.current.offsetHeight / 2 : 
		event.clientY - shiftY - refSlider.current.getBoundingClientRect().top;
		
		newPosY = newPosY < -1 ? -1 : newPosY;
		newPosY = newPosY > botBorder ? botBorder : newPosY;
		refThumb.current.style.top = newPosY + 'px';

		refInfo.current.style.marginTop = - newPosY * coef.current + 'px';
	}, [])

	const sliderOnPointerDown = useCallback((event) => {
		if (event.target != refSlider.current) return;
		event.preventDefault();

		refInfo.current.style.transition = 'all, 0.3s';
		refThumb.current.style.transition = 'top, 0.3s';
		refThumb.current.addEventListener('transitionend', removeTransition);

		onPointerMove(event);
	}, [])

	const thumbOnPointerDown = useCallback((event) => {
		event.preventDefault();
		removeTransition();
		removeListeners();
		
		shiftY = event.clientY - refThumb.current.getBoundingClientRect().top;

		if (event.pointerType === 'touch') {

			document.addEventListener('touchmove', onTouchMove);

			document.ontouchend = function() {
				document.removeEventListener('touchmove', onTouchMove);
				document.ontouchend = null;
				addListeners();
				return false;
			}
		} else {
			
			document.addEventListener('pointermove', onPointerMove);

			document.onpointerup = function() {
				document.removeEventListener('pointermove', onPointerMove);
				document.onpointerup = null;
				addListeners();
				return false;
			}
		}
	}, [])

	function removeTransition() {
		refThumb.current.style.transition = '';
		refInfo.current.style.transition = '';
	}

	const calculateCoef = useCallback(() => {
			return (
			(refInfo.current.scrollHeight - (refCutter.current.clientHeight - 30)) / 
			(refSlider.current.offsetHeight - refThumb.current.offsetHeight + 2)
			)
		}, [])

	const onResize = useCallback(() => {
		let oldPosY = refThumb.current.getBoundingClientRect().top - refSlider.current.getBoundingClientRect().top;

		refInfo.current.style.marginTop = - oldPosY * coef.current + 'px';
	}, [])

	const throttler = useCallback(() => {

		let resizeTimeout;

		window.addEventListener("resize", resizeThrottler, false);

		function resizeThrottler() {

			if (!resizeTimeout ) {
				resizeTimeout = setTimeout(function() {
					resizeTimeout = null;
					coef.current = calculateCoef();
					onResize();
				}, 66);
			}
		}

	}, [])

	function preventAnchor(event) {
		if (!confirm(`Перейти на ${event.target.href}?`)) event.preventDefault();
	}

	useEffect(() => {
		throttler(); 
		coef.current = calculateCoef();
	}, []);

	return (
		<div className='content mg-top'>
			<h2>Текст сообщения</h2>
			<div className='flex-row info-box'>
				<div id='slider' ref={refSlider} onPointerDown={sliderOnPointerDown} /*onTouchStart={sliderOnTouchStart}*/> 
					<div id='thumb' ref={refThumb} onPointerDown={thumbOnPointerDown} /*onTouchStart={thumbOnTouchStart}*/></div>
				</div>
				<div id='info-container'>
					<div id='info-cutter' ref={refCutter}>
						<p id='info' ref={refInfo}>
							<b>Сперматозоид</b> (от др.-греч. σπέρμα род. п. σπέρματος здесь «сперма» 
							+ ζωή «жизнь» + εδος «вид, облик», лат. spermatozoon, spermium) — 
							мужская половая клетка (гамета) размножающихся посредством 
							оогамии организмов.<br />
							Сперматозоиды обычно обладают способностью к активному движению 
							и служат для оплодотворения женской гаметы — яйцеклетки. 
							Обычно они значительно меньше яйцеклеток, поскольку не содержат 
							столь значительного количества цитоплазмы и производятся организмом 
							одновременно в значительном количестве.<br />
							Типичное строение сперматозоида отражает форму общего предка 
							животных и грибов: одноклеточный ядерный организм, передвигающийся 
							за счёт жгутика в задней части, используя его подобно 
							хвосту. Обширная группа происходящих от него организмов включает 
							в себя животных, большинство грибов и некоторые группы 
							протистов и называется кланом заднежгутиковых. Большинство 
							других эукариот со жгутиками имеют их в передней части.<br />
							В широком смысле слова по традиции сперматозоидами иногда называют 
							мужские половые клетки также у растений, к ним применяют 
							также термины спермии или антерозоиды (их применяют также 
							к традиционно сближавшимся с растениями грибам).<br />
							<br />
							<a href='https://ru.wikipedia.org/wiki/сперматозоид' onClick={preventAnchor}>https://ru.wikipedia.org/wiki/сперматозоид</a>
						</p>
					</div>
					<div id='transparent-border'></div>
				</div>
			</div>
			<img src='assets/img/animated/sperm-squad.png' alt='sperm squad' className='animated sperm-squad' />
			<img src='assets/img/animated/sperm-squad-2.png' alt='sperm squad' className='animated sperm-squad' />
			<img src='assets/img/animated/sperm-squad-3.png' alt='sperm squad' className='animated sperm-squad' />
			<img src='assets/img/animated/sperm-squad-4.png' alt='sperm squad' className='animated sperm-squad' />
			<img src='assets/img/animated/sperm-squad-5.png' alt='sperm squad' className='animated sperm-squad' />
		</div>
	)
}
