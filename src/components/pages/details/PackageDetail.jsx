import { useLoaderData, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, FreeMode } from 'swiper/modules';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import useGuides from "../../../hooks/useGuides";
import GuideCard from "../home/Tourism/GuideCard";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { AuthContext } from "../../../providers/AuthProvider";

const PackageDetail = () => {
    const {user} = useContext(AuthContext);
    const { type, title, price, image, gallery, description, plan, location } = useLoaderData();
    const axiosPublic = useAxiosPublic();
    const [guides, loading] = useGuides();
    const { register, handleSubmit, reset } = useForm();
    const [startDate, setStartDate] = useState(new Date());
    const navigate = useNavigate();


    const onSubmit = async (data) => {
        const booking = {
            userName: data.name,
            userEmail: data.email,
            packageName: data.title,
            guideName: data.selectedGuide,
            tourDate: data.date.slice(4, 15),
            price: data.price,
            status: "In Review",
        }

        const bookingRes = await axiosPublic.post('/bookings', booking);
        if (bookingRes.data.insertedId) {
            reset();
            navigate('/')
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Service booked successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

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
                            <button className="btn btn-info w-full btn-sm text-white" onClick={() => document.getElementById('my_modal_3').showModal()}>Book Now</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h2 className="text-center font-bold text-2xl mt-5 mb-2">Book {title}</h2>
                                    <hr />
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-control w-full my-2">
                                            <label className="label">
                                                <span className="label-text">Package Name</span>
                                            </label>
                                            <input
                                                type="text"
                                                value={title} readOnly
                                                {...register('title', { required: true })}
                                                required
                                                className="input input-bordered w-full" />
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="form-control w-full my-2">
                                                <label className="label">
                                                    <span className="label-text">Your Name</span>
                                                </label>
                                                <input
                                                    type="name"
                                                    value={user?.displayName} readOnly
                                                    {...register('name', { required: true })}
                                                    className="input input-bordered w-full" />
                                            </div>
                                            <div className="form-control w-full my-2">
                                                <label className="label">
                                                    <span className="label-text">Your Email</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    value={user?.email} readOnly
                                                    {...register('email', { required: true })}
                                                    className="input input-bordered w-full" />
                                            </div>
                                        </div>
                                        <div className="flex gap-6">
                                            <div className="form-control w-full my-2">
                                                <label className="label">
                                                    <span className="label-text">Select Guide*</span>
                                                </label>
                                                <select defaultValue="default" {...register('selectedGuide', { required: true })}
                                                    className="select select-bordered w-full">
                                                    <option disabled value="default">Choose a Guide</option>
                                                    {
                                                        guides.map(guide => <option key={guide._id} value={guide.name}>{guide.name}</option>)
                                                    }
                                                </select>
                                            </div>
                                            <div className="form-control w-full my-2">
                                                <label className="label">
                                                    <span className="label-text">Price</span>
                                                </label>
                                                <input
                                                    type="number"
                                                    value={price} readOnly
                                                    {...register('price', { required: true })}
                                                    className="input input-bordered w-full" />
                                            </div>
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Tour Date*</span>
                                            </label>
                                            <DatePicker
                                                value={startDate}
                                                selected={startDate} onChange={(date) => setStartDate(date)}
                                                className="input input-bordered w-full" placeholder="Bio"></DatePicker>
                                            <input hidden value={startDate} {...register('date', { required: true })}>
                                            </input>
                                        </div>
                                        <button className="btn mt-4 w-full btn-info">
                                            Book The Package
                                        </button>
                                    </form>
                                </div>
                            </dialog>
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