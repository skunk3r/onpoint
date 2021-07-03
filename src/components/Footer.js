import React from 'react' 

export default function Footer() {
	return (
		<footer>
			<img 
				src="img/footer.png" 
				alt="onpoint" 
				onPointerDown={(e) => e.preventDefault()} />
		</footer>
	)
}
