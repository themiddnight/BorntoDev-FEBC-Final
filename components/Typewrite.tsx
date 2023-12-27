/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { useState, useEffect } from 'react'

interface Props {
	texts: Array<string>
	startText?: string
	cursorText?: string
	speed?: number
	interval?: number
	pretype?: number
	hasCursor?: boolean
	loop?: boolean
	className?: string
}

export default function Typewrite({
	texts,
	startText = '',
	cursorText = '_',
	speed = 50,
	interval = 3000,
	pretype = 0,
	hasCursor = true,
	loop = false,
	className }: Props) {

	const [text, setText] = useState('')
	const [cursor, setCursor] = useState('')
	const [isTyping, setIsTyping] = useState(true)

	// Typewrite line
	async function typewrite(text: string) {
		return new Promise<void>(async (resolve) => {
			setText('');
			await new Promise<void>((resolve) => {
				setIsTyping(false)
				setTimeout(resolve, pretype);
			});
			setIsTyping(true)
			for (let i = 0; i < text.length; i++) {
				setTimeout(function () {
					setText((prev) => prev + text[i]);
				}, speed * i);
			}
			setTimeout(function () {
				setIsTyping(false)
				resolve();
			}, speed * text.length);
		});
	}

	// Main typewrite
	async function displayTypewrite() {
		let i = 0;
		while (i < texts.length) {
			await typewrite(texts[i]);
			await new Promise<void>((resolve) => {
				setTimeout(resolve, interval);
			});
			i++;
			if (loop && i == texts.length) {
				i = 0;
			}
		}
	}

	useEffect(() => {
		if (!hasCursor) return
		if (isTyping) {
			setCursor(cursorText)
		} else {
			const interval = setInterval(() => {
				setCursor(prev => prev === cursorText ? "\u00A0" : cursorText)
			}, 500)
			return () => clearInterval(interval)
		}
	}, [hasCursor, isTyping])

	useEffect(() => {
		displayTypewrite();
	}, [])

	return <p className={className}>{startText + text + cursor}</p>
}
