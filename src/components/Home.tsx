import React from 'react'
import Button from './Button'
import ImgHome from '../assets/HomePageGraphic.png'

function Home() {
  return (
    <section id='home' className='min-h-[600px] flex items-center'>
      <div className="max-w-7xl mx-auto grid grid-cols-2 items-center">
        <div className="space-y-4">
          <div className="relative text-8xl font-bold text-accent">
            <p>EVOGYM</p>
            <span className='absolute text-[150px] -top-25 -left-10 text-accent/5'>EVOLVE</span>
          </div>
          <div className="text-4xl text-accent">evolutionary fitness.</div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae labore iste, unde inventore asperiores error enim quod voluptatibus quibusdam harum.</p>
          <div className="space-x-2">
            <Button variant='button' btnStyle='bg-hover-btn py-3 px-8 rounded-md cursor-pointer text-white'>Join now</Button>
            <Button variant='button' btnStyle='bg-hover-btn py-3 px-8 rounded-md cursor-pointer text-white'>Learn more</Button>
          </div>
        </div>
        <div className="">
          <img src={ImgHome} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Home