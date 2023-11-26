import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useGuides from "../../../hooks/useGuides";
import GuideCard from "../home/Tourism/GuideCard";

const PackageDetail = () => {

    const { type, title, price, image, gallery, description, plan, location } = useLoaderData();
    const [guides, loading] = useGuides();

    return (
        <div className="pt-24 w-[85%] mx-auto">
            <h2 className="font-bold text-6xl mt-5 text-center">{title}</h2>
            <h2 className="text-lg my-4 text-gray-500 text-center">{description}</h2>
            <h2 className="font-bold text-3xl text-blue-400 my-8 text-center">Tour Gallery</h2>
            <div className="mb-4">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: false,
                    }}
                    navigation={false}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper rounded-xl"
                >
                    {
                        gallery.map(photo => <SwiperSlide key={photo}> <img className="h-[70vh] w-full object-cover rounded-xl" src={photo} /></SwiperSlide>)
                    }
                </Swiper>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mb-10">
                <div className="card bg-base-200 rounded-xl">
                    <img src={image} alt="" className="p-3" />
                    <div className="px-4 py-5 space-y-4">
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">Tour Type:</h2>
                            <p>{type}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">Location:</h2>
                            <p>{location}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <h2 className="card-title">Price:</h2>
                            <p>${price}/person</p>
                        </div>
                        <div>
                            <button className="btn btn-info w-full btn-sm text-white">Book Now</button>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    {
                        plan.map((day, index) =>
                            <>
                                <div className="collapse collapse-arrow bg-base-200 border-b">
                                    <input type="radio" name="my-accordion-2" />
                                    <div className="collapse-title text-xl font-bold">
                                        <span className="font-bold text-blue-400">Day {index + 1}:</span> {day.day}
                                    </div>
                                    <div className="collapse-content">
                                        <p className="text-gray-500">{day.description}</p>
                                    </div>
                                </div>
                            </>)
                    }
                </div>
            </div>
            <h2 className="font-bold text-3xl text-blue-400 my-8 text-center">Tour Guides</h2>
            <hr />
            <div className="mt-5 mb-10 border-b">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                >
                    {
                        loading ? <span className="loading loading-spinner text-info"></span> : guides.map(guide => <SwiperSlide key={guide._id}><GuideCard guide={guide}></GuideCard></SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default PackageDetail;