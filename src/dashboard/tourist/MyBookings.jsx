import { FaTrashAlt } from "react-icons/fa";
import useBookings from "../../hooks/useBookings";


const MyBookings = () => {

 const [bookings] = useBookings();

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
                        <th>Tour Guide</th>
                        <th>Tour Date</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th></th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((booking, index) => <tr key={booking._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {booking.packageName}
                            </td>
                            <td>
                                {booking.guideName}
                            </td>
                            <td>
                                {booking.tourDate}
                            </td>
                            <td>${booking.price}</td>
                            <td>
                                {booking.status}
                            </td>
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

export default MyBookings;