import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AddPackage = () => {

    const axiosSecure = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onPost = async (data) => {
        const pack = {
            title: data.title,
            image: data.banner,
            price: data.price,
            type: data.type,
            gallery: [
                data.first, data.second, data.third
            ],
            description: data.description,
            location: data.location,
            plan: [
                {
                    day: data.day1title,
                    description: data.day1desc
                },
                {
                    day: data.day2title,
                    description: data.day2desc
                },
                {
                    day: data.day3title,
                    description: data.day3desc
                },
                {
                    day: data.day4title,
                    description: data.day4desc
                },
                {
                    day: data.day5title,
                    description: data.day5desc
                }
            ]
        }

        console.log(pack)

        const packageRes = await axiosSecure.post('/packages', pack);
        if (packageRes.data.insertedId) {
            reset();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Package added successfully.',
                showConfirmButton: false,
                timer: 1500
            });
        }
    }

    return (
        <div>
            <h2 className="text-center text-3xl font-bold mt-20">Add a Package</h2>
            <form onSubmit={handleSubmit(onPost)} className="border border-black p-5 mt-5 rounded-xl">
                <div className="flex gap-8">
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Package Name</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Name of the package"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Type</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Type"
                            {...register('type', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Package description"
                            {...register('description', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="flex gap-8">
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Set Price</span>
                        </label>
                        <input
                            type="number"
                            placeholder="Set the price"
                            {...register('price', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Location"
                            {...register('location', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-2">
                        <label className="label">
                            <span className="label-text">Package Banner</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter image URL"
                            {...register('banner', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full my-2">
                    <label className="label">
                        <span className="label-text">Upload gallery URLs (one at each)</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="Photo URL 1"
                            {...register('first', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="Photo URL 2"
                            {...register('second', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="Photo URL 3"
                            {...register('third', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <div className="form-control w-full my-2">
                    <h2 className="font-bold my-4 text-lg">5 Days Plan</h2>
                    <label className="label">
                        <span className="label-text">Day 1</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="title"
                            {...register('day1title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="description"
                            {...register('day1desc', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Day 2</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="title"
                            {...register('day2title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="description"
                            {...register('day2desc', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Day 3</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="title"
                            {...register('day3title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="description"
                            {...register('day3desc', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Day 4</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="title"
                            {...register('day4title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="description"
                            {...register('day4desc', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <label className="label">
                        <span className="label-text">Day 5</span>
                    </label>
                    <div className="flex gap-8">
                        <input
                            type="text"
                            placeholder="title"
                            {...register('day5title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                        <input
                            type="text"
                            placeholder="description"
                            {...register('day5desc', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                </div>
                <button className="btn mt-6 w-full btn-info">
                    Add Package
                </button>
            </form>
        </div>
    );
};

export default AddPackage;