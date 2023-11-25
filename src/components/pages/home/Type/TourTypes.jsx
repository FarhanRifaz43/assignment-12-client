import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const TourTypes = () => {
    return (
        <div className='w-[85%] mx-auto mb-20'>
            <Swiper
                slidesPerView={5}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/sKtGYym/pexels-francesco-ungaro-19124973.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">Hiking</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/546Z6VG/pexels-pixabay-70080.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">Wildlife</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/TKKxCxg/pexels-pixabay-207305.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">Air Rides</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/18bW4c1/pexels-henrik-lebotos-3878114.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">Cultural</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/0n8N1xV/pexels-asad-photo-maldives-457882.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">Beach</h2>
                        </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link>
                        <div className="card shadow-xl bg-gray-200 mb-10">
                            <figure className='px-2 pt-2'>
                                <img src="https://i.ibb.co/Jy3zT3H/pexels-oleksandr-p-1007836.jpg" className="rounded-xl" />
                            </figure>
                            <h2 className="font-bold text-xl text-center text-black my-1">River Cruise</h2>
                        </div>
                    </Link>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default TourTypes;