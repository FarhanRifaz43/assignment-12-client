import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";

const DetailFrom = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const axiosPublic = useAxiosPublic();

    const onPost = async (data) => {

        const guide = {
            name: data.name,
            image: user.photoURL,
            phone: data.phone,
            email: user.email,
            education: data.education,
            skills: data.skills,
            experience: data.experience
        }

        const guideRes = await axiosPublic.patch(`/guides/${user.email}`, guide);
        if (guideRes.data.insertedId) {
            reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Profile updated successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    };


    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-20">Update Your Profile</h2>
            <form onSubmit={handleSubmit(onPost)} className="border border-black p-5 mt-5 rounded-xl">
                <div className="flex gap-8">
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        defaultValue={user.displayName}
                        placeholder="Your name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your phone number"
                        {...register('phone', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                </div>
                <div className="flex gap-8">
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Education</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your educational background"
                        {...register('education', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Skills</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Skills you have"
                        {...register('skills', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Experience</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your work experience"
                        {...register('experience', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <button className="btn mt-6 w-full btn-info">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default DetailFrom;