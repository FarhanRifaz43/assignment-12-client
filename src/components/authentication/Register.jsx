import { FcGoogle } from 'react-icons/fc'
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import Swal from 'sweetalert2';

const Register = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { googleSignIn, createUser, updateUserProfile } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                navigate(location?.state ? location.state : '/')
            })
    }

    const onSubmit = async (data) => {

        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, res.data.data.display_url)
                        .then(() => {
                            const userInfo = {
                                displayName: data.name,
                                email: data.email,
                                photoURL: res.data.data.display_url,
                                role: 'user'
                            }
                            axiosPublic.post('/users', userInfo)
                                .then(res => {
                                    if (res.data.insertedId) {
                                        console.log('user added to the database')
                                        reset();
                                        Swal.fire({
                                            position: 'center',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate(location?.state ? location.state : '/');
                                    }
                                })


                        })
                        .catch(error => console.log(error))
                })
        }
    };

    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/5GLNp3v/pexels-eberhard-grossgasteiger-3389613.jpg')]">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl w-max font-bold"><span className="text-blue-400">Welcome</span> to Our Platform</h1>
                        <p className="pt-6 pb-3">Please create your account.  Already have one?
                            <Link to={'/login'} className="underline text-blue-400">Log in</Link></p>
                        <Link to={'/'} className="underline text-blue-400">Back Home</Link>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name" {...register("name", { required: true })} placeholder="your name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} placeholder="your email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password"{...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} placeholder="your password" className="input input-bordered" required />
                                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Upload Photo</span>
                                </label>
                                <input type="file" {...register('image', { required: true })} className="file-input file-input-bordered file-input-md w-full" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Sign Up</button>
                            </div>
                        </form>
                        <div className="flex items-center gap-3 w-fit mb-8 mx-auto">
                            <span>Or, sign in with</span><button className='btn btn-ghost btn-outline text-lg' onClick={handleGoogleSignIn} color="gray"><FcGoogle className="mr-1 text-xl"></FcGoogle>Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;