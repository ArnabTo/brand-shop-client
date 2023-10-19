import { useState, useEffect } from "react";
import SamaungProducts from "./SamaungProducts";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';

const Samsung = () => {

  const [samsungs, setSamsungs] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5003/products/samsung')
      .then(res => res.json())
      .then(data => setSamsungs(data))
  }, [])
  return (
    <div className="max-w-6xl m-auto">
      <div>
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
            <img src="https://i.ibb.co/JpF64C1/Home-Main-KV-PC-1440-640-pix.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/CmcsMyV/Watch-Home-main-KV-pc-1440x640.png" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://i.ibb.co/jwGvLZ1/PCD-DM3-KV-Main-KV-1440x640-pc.png" />
          </SwiperSlide>
        </Swiper>
      </div>
      <h1 className="text-center text-3xl font-extrabold my-8 uppercase">Avilable Samsung Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {
          samsungs.map(samProducts => <SamaungProducts samProducts={samProducts} key={samProducts._id}></SamaungProducts>)
        }
      </div>
    </div>
  );
};

export default Samsung;