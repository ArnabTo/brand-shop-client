import { useState, useEffect } from "react";
import NvidiaProducts from "./NvidiaProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const Nvidia = () => {
    const [nvidias, setNvidias] = useState([]);

    useEffect(() => {
        fetch('https://brand-shop-server-zeta.vercel.app/products/nvidia')
            .then(res => res.json())
            .then(data => setNvidias(data))
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
                        <img src="https://i.ibb.co/N68v099/Screenshot-57.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/g9cQNhf/Screenshot-56.png" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://i.ibb.co/4jc7Z1P/Screenshot-55.png" />
                    </SwiperSlide>
                </Swiper>
            </div>
            <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Avilable Intel Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
                {
                    nvidias.map(nvidiaProducts => <NvidiaProducts nvidiaProducts={nvidiaProducts} key={nvidiaProducts._id}></NvidiaProducts>)
                }
            </div>
        </div>
    );
};

export default Nvidia;