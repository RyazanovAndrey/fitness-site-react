import type { TSlider } from "@/types/type"

const SliderCard = ({ title, description, image }: TSlider) => {
  return (
    <div className="relative group">
      <img src={image} alt="" />
      <div className="absolute inset-0 bg-[#FFA29E]/90 text-white grid place-items-center p-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="text-center">
          <div className="text-2xl font-bold">{title}</div>
          {description}
        </div>
      </div>
    </div>
  )
}

export default SliderCard