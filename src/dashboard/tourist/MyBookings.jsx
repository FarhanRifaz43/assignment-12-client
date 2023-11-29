import { FaTrashAlt } from "react-icons/fa";
import useBookings from "../../hooks/useBookings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";


const MyBookings = () => {

 const [bookings, refetch] = useBookings();
 const axiosSecure = useAxiosSecure();

 const handleCancel = async(id) => {
    const deleteRes = await axiosSecure.delete(`/bookings/${id}`);
    if (deleteRes.data.deletedCount > 0) {
        refetch();
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Cancelled successfully.',
            showConfirmButton: false,
            timer: 1500
        });
 }
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
                                <button disabled
                                    className="btn btn-info btn-outline btn-sm">
                                    Apply
                                </button>
                            </th>
                            <th>
                                {booking.status === 'In Review' && <button onClick={() => handleCancel(booking._id)}
                                    className="btn btn-error btn-outline btn-sm">
                                    Cancel
                                </button>}
                            </th>
                            <th>
                                {booking.status === 'Accepted' && <button
                                    className="btn btn-success btn-outline btn-sm">
                                    Pay
                                </button>}
                                {booking.status !== 'Accepted' && <button disabled
                                    className="btn btn-success btn-outline btn-sm">
                                    Pay
                                </button>}
                            </th>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MyBookings;