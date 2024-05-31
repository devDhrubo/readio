import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';

const Slider = () => {
    return (
        <>
            <Swiper
                loop={true}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
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
                    <div className="hero min-h-screen dark:bg-gray-900 lg:px-28 p-4 ">
                        <div className="lg:hero-content md:hero-content text-black lg:text-left lg:ml-10">
                            <div className="max-w-md md:text-left dark:text-white">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Grab Favourite to Your List</h1>
                                <p className="mb-5 lg:text-lg text-sm">Add books with a click for easy access, tailoring your library to unique tastes for a seamless reading experience.</p>
                                <button className="btn btn-primary bg-[#c41981] border-none z-10 text-white rounded-full hover:bg-[#9b1566] ">Explore Now</button>
                            </div>
                            <div>
                                <img className='lg:-mt-20 md:-mt-20 ml-2' src={slider2} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen dark:bg-gray-900 lg:px-28 p-4">
                        <div className="lg:hero-content md:hero-content text-black lg:text-left lg:ml-10">
                            <div className="max-w-md md:text-left dark:text-white">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Over 10K+ Books Here</h1>
                                <p className="mb-5 lg:text-lg text-sm">Boasts a vast library of over 10,000 books, offering a diverse selection across genres and interests. Explore and discover your next favorite read with ease.</p>
                                <button className="btn btn-primary bg-[#c41981] border-none z-10 text-white rounded-full hover:bg-[#9b1566] ">Explore Now</button>
                            </div>
                            <div>
                                <img className='lg:-mt-6 ml-5' src={slider3} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen dark:bg-gray-900 lg:px-28 p-4">
                        <div className="lg:hero-content md:hero-content text-black lg:text-left lg:ml-10">
                            <div className="max-w-md md:text-left dark:text-white">
                                <h1 className="mb-5 lg:text-5xl md:text-4xl text-3xl font-bold">Get Your New Book Collection</h1>
                                <p className="mb-5 lg:text-lg text-sm">An exciting opportunity to build your personal library with fresh titles. Explore a curated selection and start expanding your literary horizons today!</p>
                                <button className="btn btn-primary bg-[#c41981] border-none z-10 text-white rounded-full hover:bg-[#9b1566] ">Explore Now</button>
                            </div>
                            <div>
                                <img className='lg:-mt-6' src={slider1} alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </>
    );
};

export default Slider;