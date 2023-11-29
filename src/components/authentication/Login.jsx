import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const Login = () => {

    const { googleSignIn, signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {

                navigate(location?.state ? location.state : '/')
            })
    }
    const onLogin = data => {
        signIn(data.email, data.password)
            .then(result => {
                Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(location?.state ? location.state : '/')
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-[url('https://i.ibb.co/5GLNp3v/pexels-eberhard-grossgasteiger-3389613.jpg')]">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl w-max font-bold"><span className="text-blue-400">Welcome</span> Back!</h1>
                        <p className="pt-6 pb-3 w-max">Please sign in to access your account.  New here?
                            <Link to={'/register'} className="underline text-blue-400"> Create an account</Link></p>
                        <Link to={'/'} className="underline text-blue-400">Back Home</Link>
                    </div>
                    <div className="card shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onLogin)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register('email')} placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register('password')} placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-info">Login</button>
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

export default Login;