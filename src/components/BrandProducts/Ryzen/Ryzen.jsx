import { useEffect, useState } from "react";
import RyzenProducts from "./RyzenProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Ryzen = () => {

    const [ryzens, setRyzens] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5003/products/ryzen')
            .then(res => res.json())
            .then(data => setRyzens(data))
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
                        <img src="https://i.ibb.co/4pqXTb7/Screenshot-53.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/ssVccy8/Screenshot-52.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/wgFmwHB/Screenshot-51.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Avilable Intel Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    ryzens.map(ryzenProducts => <RyzenProducts ryzenProducts={ryzenProducts} key={ryzenProducts._id}></RyzenProducts>)
                }
            </div>
        </div>
    );
};

export default Ryzen;