import { NavLink, Outlet } from "react-router-dom";
import useGuide from "../hooks/useGuide";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [isGuide, isGuideLoading ] = useGuide();
    const [isAdmin, isAdminLoading] = useAdmin();

    return (
        <div className="flex">
            <section className="bg-blue-500 min-h-screen lg:w-1/6">
                <h2 className="text-center pt-8 pb-2 font-bold text-3xl text-white">Dashboard</h2>
                {(!isGuide && !isAdmin) && <div className="w-[85%] mx-auto mt-20">
                    <NavLink to={'/dashboard'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Profile</h2></NavLink>
                    <NavLink to={'/dashboard/user/bookings'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Bookings</h2></NavLink>
                    <NavLink to={'/dashboard/user/wishlist'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Wishlist</h2></NavLink>
                </div>}
                {(isGuide) && <div className="w-[85%] mx-auto mt-20">
                    <NavLink to={'/dashboard'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Profile</h2></NavLink>
                    <NavLink to={'/dashboard/guide/assignedTours'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Assigned Tours</h2></NavLink>
                </div>}
                {(isAdmin) && <div className="w-[85%] mx-auto mt-20">
                    <NavLink to={'/dashboard'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">My Profile</h2></NavLink>
                    <NavLink to={'/dashboard/admin/addPackage'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Add Package</h2></NavLink>
                    <NavLink to={'/dashboard/admin/manageUsers'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Manage Users</h2></NavLink>
                </div>}
                <div className="w-[85%] mx-auto pt-3 mt-3 border-t-2">
                    <NavLink to={'/'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Home</h2></NavLink>
                    <NavLink><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Community</h2></NavLink>
                    <NavLink to={'/stories'}><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Blogs</h2></NavLink>
                    <NavLink><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">About Us</h2></NavLink>
                    <NavLink><h2 className="p-2 text-white text-xl hover:bg-blue-600 transition delay-50">Contact Us</h2></NavLink>
                </div>
            </section>
            <section className="px-20">
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default Dashboard;