'use client'
import { useState, useEffect } from 'react'

type Props = {
	texts: string[]
	speed?: number
	interval?: number
	cursor?: boolean
	className?: string
}

export default function Typewrite({ texts, speed = 50, interval = 3000, cursor = true, className }: Props) {
	const [text, setText] = useState('')
	const [underline, setUnderline] = useState('')
	const [isTyping, setIsTyping] = useState(true)

	useEffect(() => {
		if (!cursor) return
		if (isTyping) {
			setUnderline('_')
		} else {
			const interval = setInterval(() => {
				setUnderline(prev => prev === '_' ? '' : '_')
			}, 500)
			return () => clearInterval(interval)
		}
	}, [isTyping])

	useEffect(() => {
		for (let i = 0; i < texts.length; i++) {
			setTimeout(() => {
				setIsTyping(true)
				for (let j = 0; j < texts[i].length; j++) {
					setTimeout(() => {
						setText(prev => prev + texts[i][j])
						if (j === texts[i].length - 1) setIsTyping(false)
					}, speed * j)
				}
				setText('')
			}, interval * i)
		}
	}, [])

	return (
		<p className={className}>{text + underline}</p>
	)
}
