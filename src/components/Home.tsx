import Button from './Button'
import ImgHome from '../assets/HomePageGraphic.png'
import { sponsorImg } from '@/types/type'
import { motion } from "motion/react"

function Home() {
  return (
    <>
      <section id='home' className='min-h-[600px] flex items-center'>
        <div className="max-w-7xl mx-auto grid grid-cols-2 items-center px-3">
          <motion.div
              initial={{ opacity:0, x:-20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration: 1 }}  >
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
          </motion.div >
          <motion.div initial={{ opacity:0, x:20 }}
              animate={{ opacity:1, x:0 }}
              transition={{ duration: 1 }}>
            <img src={ImgHome} alt="" />
          </motion.div>
          {/* <div className="">
            <img src={ImgHome} alt="" />
          </div> */}
        </div>
        <img src="../assets/SponsorForbes.png" alt="" />
      </section>
      <section className='bg-red-300'>
        <div className="max-w-7xl mx-auto px-3 min-h-10 flex py-6 justify-between items-center">
          {sponsorImg.map((item, index) => (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.2 }}>
              <img src={item} width={100} alt="" />
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Home