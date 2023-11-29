import { FaTrashAlt } from "react-icons/fa";
import useWishlist from "../../hooks/useWishlist";

const MyWishlist = () => {

    const [wishlist] = useWishlist();

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
                        <th></th>
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
                            <th>
                                <button
                                    className="btn btn-ghost btn-lg">
                                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                </button>
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyWishlist;