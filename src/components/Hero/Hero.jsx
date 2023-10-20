import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import '../../index.css';
const Hero = () => {
  
    return (
        <div className='-z-50'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero h-[40rem]" style={{ backgroundImage: 'url(https://i.ibb.co/JmYd0V5/hostaphoto-Gs-Xsz-N5-Aok-Q-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">TechTreasures: Discover the Future of Gadgets</h1>
                                <p className="mb-5">Unlock tomorrow&aposs tech wonders at TechTreasures, where innovation meets discovery. Explore the future of gadgets today.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero h-[40rem]" style={{ backgroundImage: 'url(https://i.ibb.co/fXF3SDb/rama-krushna-behera-n-Ivr9-QO3-K3-Y-unsplash.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Elevate Your Lifestyle with Cutting-Edge Tech</h1>
                                <p className="mb-5">Elevate Your Lifestyle with Cutting-Edge Tech
                                Enhance your life with top-tier tech – audio gear, wearables, and more. Trust us for quality and innovation that elevates convenience, entertainment, and productivity.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;