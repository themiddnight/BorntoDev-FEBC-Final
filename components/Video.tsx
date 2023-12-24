'use client'
import { useState } from 'react'
import ReactPlayer from 'react-player'

export default function Video({ url }: { url: string }) {
    const [playing, setPlaying] = useState(false)
    const [played, setPlayed] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isFinished, setIsFinished] = useState(false)

    function handleFinished() {
        if (duration - played < 5) {
            setIsFinished(true)
        }
    }

    return (
        <div className='relative'>
            <ReactPlayer
                url={url}
                controls={true}
                playing={playing}
                onProgress={(state) => setPlayed(state.playedSeconds)}
                onDuration={(state) => setDuration(state)}
                onEnded={() => handleFinished()}
                className='rounded-lg'
            />
            {isFinished && (
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 rounded-lg'>
                    <button
                        onClick={() => setPlaying(true)}
                        className='bg-white/50 hover:bg-white/70 text-white/80 hover:text-white/90 px-5 py-3 rounded-lg'
                    >
                        Replay
                    </button>
                </div>
            )}
        </div>
    )
}