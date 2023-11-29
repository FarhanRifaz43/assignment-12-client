import { FaTrashAlt } from "react-icons/fa";
import useWishlist from "../../hooks/useWishlist";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const MyWishlist = () => {

    const [wishlist, refetch] = useWishlist();
    const axiosSecure = useAxiosSecure();

    const handleRemove = pack => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Remove"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/wishlist/${pack._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    // refetch to update the ui
                    refetch();
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `Removed from wishlist`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }


            }
        });
    }

    return (
        <div>
            <table className="table  w-full mt-20 ml-10">
                {/* head */}
                <thead className="bg-blue-100">
                    <tr className="text-lg">
                        <th>
                            #
                        </th>
                        <th>Package Name</th>
                        <th>Tour Type</th>
                        <th>Price</th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        wishlist.map((wish, index) => <tr key={wish._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {wish.packageName}
                            </td>
                            <td>
                                {wish.type}
                            </td>
                            <td>${wish.price}</td>
                            <td>
                                <button onClick={() => handleRemove(wish)}
                                    className="btn btn-outline btn-error btn-sm">
                                    Remove
                                </button>
                            </td>
                            <td>
                                <button
                                    className="btn btn-outline btn-info btn-sm">
                                    Details
                                </button>
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyWishlist;