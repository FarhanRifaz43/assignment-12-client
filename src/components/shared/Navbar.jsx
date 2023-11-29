import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    console.log(user)

    const handleLogOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#000000",
            confirmButtonText: "Log Out"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Success",
                    text: "Logged out successfully.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                logOut();
            }
        });
    }

    const navLinks =
        <>
            <li><Link to={'/'}>Home</Link></li>
            <li><Link>Community</Link></li>
            <li><Link to={'/stories'}>Blogs</Link></li>
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
        </>

    return (
        <div className="w-full fixed z-10">
            <div className="navbar bg-base-200 pt-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div className="pl-4">
                        <Link to={'/'}><h2 className="text-2xl font-bold">Embark<span className="text-blue-500">Escapes</span></h2></Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex gap-5 items-center pr-4">
                    {user && <div className="dropdown dropdown-end">
                        <div className="avatar online">
                            <div className="w-12 h-12 rounded-full" tabIndex={1}>
                                <img src={user.photoURL} />
                            </div>
                            <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 mt-12 shadow bg-base-100 rounded-box text-center w-52 pl-5">
                                <h2 className="mt-3 font-bold">{user.displayName}</h2>
                                <h2 className="text-gray-400">{user.email}</h2>
                                <hr className="my-3" />
                                <Link to={'/dashboard'}><button className="btn btn-sm btn-ghost w-full">Dashboard</button></Link>
                                <Link><button onClick={handleLogOut} className="btn btn-sm btn-ghost w-full">Log Out</button></Link>
                            </ul>
                        </div>
                    </div>}
                    {!user && <Link to={'/login'}><button className="btn btn-outline btn-info">Login</button></Link>}
                </div>
            </div>
        </div>
    );
};

export default Navbar;