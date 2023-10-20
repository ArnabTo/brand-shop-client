import { useEffect, useState } from "react";
import AppleProducts from "./AppleProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Apples = () => {
    const [apples, setApples] = useState([]);
    useEffect(() => {
        fetch('https://brand-shop-server-zeta.vercel.app/products/apple')
            .then(res => res.json())
            .then(data => setApples(data))
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
                        <img src="https://i.ibb.co/phKygF3/Screenshot-48.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/8YTrQQJ/Screenshot-50.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/y5Bnjn8/Screenshot-49.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Avilable Apple Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    apples.map(appleProducts => <AppleProducts appleProducts={appleProducts} key={appleProducts._id}></AppleProducts>)
                }
            </div>
        </div>
    );
};

export default Apples;