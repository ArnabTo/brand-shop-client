import { useEffect, useState } from "react";
import IntelProducts from "./IntelProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Intel = () => {

    const [intels, setIntels] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/products/intel')
            .then(res => res.json())
            .then(data => setIntels(data))
    }, [])
    return (
        <div className="max-w-6xl m-auto">
            <div className="my-8">
                <Swiper
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://i.ibb.co/FVH6XYt/Intel-14-Gen-processor-Lunching-Social-Media-Web-Slider-1697524821.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img className=" h-[11rem] lg:h-[38rem] sm:object-contain" src="https://i.ibb.co/4gGvx3W/intel-14th-Gen-Processor.webp" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img  src="https://i.ibb.co/znW1nh1/bkash-durga-puja-home-banner-982x500.webp" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Avilable Intel Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    intels.map(intelProducts => <IntelProducts intelProducts={intelProducts} key={intelProducts._id}></IntelProducts>)
                }
            </div>
        </div>
    );
};

export default Intel;