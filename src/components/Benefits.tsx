import Title from "./Title"
import { CircleStar, Dumbbell, Volleyball } from "lucide-react"
import BenefitsCard from "./BenefitsCard"
import type { IList } from "@/types/type"
import { motion } from "motion/react"
import Image from '../assets/BenefitsPageGraphic.png'
import Decor from '../assets/AbstractWaves.png'
import Star from '../assets/Sparkles.png'
import Button from "./Button"

const Benefits = () => {

  const list: IList[] = [
    { icon: <Dumbbell />, title: 'State of the Art Facilities', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur consequatur numquam perferendis veritatis id sint reprehenderit in quidem cum.' },
    { icon: <Volleyball />, title: 'State of the Art Facilities', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur consequatur numquam perferendis veritatis id sint reprehenderit in quidem cum.' },
    { icon: <CircleStar />, title: 'State of the Art Facilities', desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur consequatur numquam perferendis veritatis id sint reprehenderit in quidem cum.' }
  ]

  return (
    <>
      <section id="benefits" className="min-h-[600px] py-30 text-accent">
        <div className="max-w-7xl mx-auto px-3 space-y-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <Title>MORE THAN JUST GYM</Title>
            <p className="max-w-[700px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi consectetur consequatur numquam perferendis veritatis id sint reprehenderit in quidem cum.</p>
          </motion.div>
          <div className="grid grid-cols-3 gap-x-5">
            {list.map((item, index) => (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.4 }}>
                <BenefitsCard {...item} />
              </motion.div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-3 py-20 grid grid-cols-2 items-center">
          <img src={Image} alt="" />
          <div className="relative space-y-5">
            <Title>MILLIONS OF HAPPY MEMBERS GETTING <span className="text-[#FE6A6C]">FIT</span></Title>
            <p>Nascetur aenean massa auctor tincidunt. Iaculis potenti amet egestas ultrices consectetur adipiscing ultricies enim. Pulvinar fames vitae vitae quis. Quis amet vulputate tincidunt at in nulla nec. Consequat sed facilisis dui sit egestas ultrices tellus. Ullamcorper arcu id pretium sapien proin integer nisl. Felis orci diam odio.
            </p>
            <p>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
            <Button variant="button" btnStyle="bg-hover-btn py-3 px-8 rounded-md cursor-pointer text-white" >Join now</Button>
            <img src={Decor} alt="" className="absolute -top-20 -left-20" />
            <img src={Star} className="absolute -bottom-10 -right-10" alt="" />
          </div>
        </div>
      </section>
    </>
  )
}

export default Benefits