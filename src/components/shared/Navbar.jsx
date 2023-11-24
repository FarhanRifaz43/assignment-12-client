import { Link } from "react-router-dom";

const Navbar = () => {

    const navLinks =
        <>
            <li><Link>Home</Link></li>
            <li><Link>Community</Link></li>
            <li><Link>Blogs</Link></li>
            <li><Link>About Us</Link></li>
            <li><Link>Contact Us</Link></li>
        </>

    return (
        <div className="w-full fixed z-10">
            <div className="navbar bg-base-100 pt-4">
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
                    <div className="dropdown dropdown-end">
                        <div className="avatar online">
                            <div className="w-12 h-12 rounded-full" tabIndex={1}>
                                <img src="https://i.ibb.co/7kgBp4r/istockphoto-1341046662-612x612.jpg" />
                            </div>
                            <ul tabIndex={1} className="dropdown-content z-[1] menu p-2 mt-12 shadow bg-base-100 rounded-box w-52 pl-5">
                                <h2>Name</h2>
                                <h2>Email</h2>
                                <hr className="my-3"/>
                                <Link><h2>Dashboard</h2></Link>
                            </ul>
                        </div>
                    </div>
                    <a className="btn btn-outline btn-info">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;