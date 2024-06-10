import React from 'react'
import Puzzle from '../Assets/PuzzleAnimate.json'
import Lottie from 'lottie-react'


export default function Home() {
  return (
    <div className='flex lg:flex-row mt-20 flex-col items-center justify-center w-full '>
        <div className='flex gap-6 flex-col lg:items-start items-center  w-full lg:w-1/2  '>
            <h1 className='font-Rubik text-4xl sm:text-5xl xl:text-6xl justify-start md:w-4/5 text-white w-full lg:w-3/4'>Welcome at Puzzlit</h1>
            <h2 className='text-white font-RubikOne text-sm sm:text-xl xl:text-2xl md:w-4/5 w-full lg:w-3/4'>Where you can play your favorite puzzle game. we hope you will enjoy your journey through our game</h2>
        </div>
        <div className='flex lg:items-start lg:justify-start items-center justify-center h-full w-full lg:w-1/3'>
            <Lottie className='m-auto' animationData={Puzzle}/>
        </div>
    </div>
  )
}
