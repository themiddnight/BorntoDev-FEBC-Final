'use client'
import { useState, useEffect } from 'react'

type Props = {
	texts: string[]
	speed?: number
	interval?: number
	className?: string
}

export default function Typewrite({ texts, speed = 50, interval = 3000, className }: Props) {
	const [text, setText] = useState('_')

	useEffect(() => {
		for (let i = 0; i < texts.length; i++) {
			setTimeout(() => {
				for (let j = 0; j < texts[i].length; j++) {
					setTimeout(() => {
						setText(prev => prev + texts[i][j])
					}, speed * j)
				} 
				setText('')
			}, interval * i)
		} 
	}, [])

	return (
		<p className={className}>{text}</p>
	)
}
