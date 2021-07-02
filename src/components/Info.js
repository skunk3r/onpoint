import React, {useRef, useEffect, useCallback} from 'react'

export default function Info() {
	
	const refSlider = useRef(null);
	const refThumb = useRef(null);
	const refInfo = useRef(null);
	let shiftY, coef;

	const onPointerMove = useCallback((event) => {
		let botBorder = refSlider.current.offsetHeight - refThumb.current.offsetHeight + 1;
		let newPosY = event.target === refSlider.current ? 
		event.clientY - refSlider.current.getBoundingClientRect().top - refThumb.current.offsetHeight / 2 : 
		event.clientY - shiftY - refSlider.current.getBoundingClientRect().top;
		
		newPosY = newPosY < -1 ? -1 : newPosY;
		newPosY = newPosY > botBorder ? botBorder : newPosY;
		refThumb.current.style.top = newPosY + 'px';

		refInfo.current.style.marginTop = - newPosY * coef + 'px';
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

		shiftY = event.clientY - refThumb.current.getBoundingClientRect().top;

		document.addEventListener('pointermove', onPointerMove);

		document.onpointerup = function() {
	    	document.removeEventListener('pointermove', onPointerMove);
	    	document.onpointerup = null;
 		}
	}, [])

	function removeTransition() {
		refThumb.current.style.transition = '';
		refInfo.current.style.transition = '';
	}

	function calculateCoef() {
		let textCutter = document.querySelector('#info-cutter');

		return ((info.scrollHeight - (textCutter.clientHeight - 30)) / (slider.offsetHeight - thumb.offsetHeight + 2));
	}

	useEffect(() => coef = calculateCoef(), []);

	return (
		<div className='content'>
			<h2>Текст сообщения</h2>
			<div className='flex-row mg-top'>
				<div id='slider' ref={refSlider} onPointerDown={sliderOnPointerDown}>
					<div id='thumb' ref={refThumb} onPointerDown={thumbOnPointerDown}></div>
				</div>
				<div id='info-container'>
					<div id='info-cutter'>
						<p id='info' ref={refInfo}><b>Сперматозоид</b> (от др.-греч. σπέρμα род. п. σπέρματος здесь «сперма» 
							+ ζωή «жизнь» + εδος «вид, облик», лат. spermatozoon, spermium) — 
							мужская половая клетка (гамета) размножающихся посредством 
							оогамии организмов.<br />
							Сперматозоиды обычно обладают способностью к активному дви-
							жению и служат для оплодотворения женской гаметы — яйцеклетки. 
							Обычно они значительно меньше яйцеклеток, поскольку не содержат 
							столь значительного количества цитоплазмы и производятся орга-
							низмом одновременно в значительном количестве.<br />
							Типичное строение сперматозоида отражает форму общего предка 
							животных и грибов: одноклеточный ядерный организм, передвига-
							ющийся за счёт жгутика в задней части, используя его подобно 
							хвосту. Обширная группа происходящих от него организмов вклю-
							чает в себя животных, большинство грибов и некоторые группы 
							протистов и называется кланом заднежгутиковых. Большинство 
							других эукариот со жгутиками имеют их в передней части.<br />
							В широком смысле слова по традиции сперматозоидами иногда на-
							зывают мужские половые клетки также у растений, к ним применя-
							ют также термины спермии или антерозоиды (их применяют также 
							к традиционно сближавшимся с растениями грибам).<br />
							<br />
							<a href='https://ru.wikipedia.org/wiki/сперматозоид'>https://ru.wikipedia.org/wiki/сперматозоид</a>
						</p>
					</div>
					<div id='transparent-border'></div>
				</div>
			</div>
		</div>
	)
}
