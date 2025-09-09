import Title from "./Title"
import { classList } from "@/data"
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from "./SliderCard";

const Classes = () => {
    return (
        <section className="max-w-7xl mx-auto px-3 text-accent">
            <div className="max-w-2xl space-y-10">
                <Title>OUR CLASSES</Title>
                <p>Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est tellus quam porttitor. Mauris velit euismod elementum arcu neque facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit enim mattis odio in risus nunc.</p>
            </div>
            <Swiper
                spaceBetween={20}
                slidesPerView={3}
                grabCursor={true}
                loop
                className="mt-10"
            >
                {classList.map(item => (
                    <SwiperSlide>
                        <SliderCard {...item} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Classes