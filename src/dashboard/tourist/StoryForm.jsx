import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const StoryForm = () => {

    const { user } = useContext(AuthContext);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [startDate, setStartDate] = useState(new Date());

    const axiosPublic = useAxiosPublic();

    const onPost = async (data) => {

        const story = {
            title: data.title,
            user: user?.displayName,
            profilePicture: user?.photoURL,
            postingDate: data.dateTime.slice(4, 15),
            mainStory: data.mainStory
        }

        const storyRes = await axiosPublic.post('/stories', story);
                if (storyRes.data.insertedId) {
                    reset();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Story posted successfully.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
    };

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-20">Share Your Story</h2>
            <form onSubmit={handleSubmit(onPost)} className="border border-black p-5 mt-5 rounded-xl">
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Story Title</span>
                    </label>
                    <input
                        type="text"
                        placeholder="title of your story"
                        {...register('title', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Main Story</span>
                    </label>
                    <input
                        type="text"
                        placeholder="Your story"
                        {...register('mainStory', { required: true })}
                        required
                        className="input input-bordered w-full h-24" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Posting Date</span>
                    </label>
                    <DatePicker
                        value={startDate}
                        selected={startDate} readOnly
                        className="input input-bordered w-full" placeholder="Bio"></DatePicker>
                    <input hidden value={startDate} {...register('dateTime', { required: true })}>
                    </input>
                </div>
                <button className="btn mt-6 w-full btn-info">
                    Add Item
                </button>
            </form>
        </div>
    );
};

export default StoryForm;