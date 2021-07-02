import React from 'react'

export default function List({props, startIndex, endIndex}) {

	let count = startIndex;

	return (
		<ul id='list'>
			{
				props.map((item, index) => {
					if (count === index + 1 && count - 1 != endIndex) return (
						<li key={index}>
							<p className='numbering'>{'0' + count++}</p>
							<p>{item}</p>
						</li>
					)
				})
			}
		</ul>
	)
}
