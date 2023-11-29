import { useContext } from "react";
import useAssigned from "../../hooks/useAssigned";
import { AuthContext } from "../../providers/AuthProvider";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedTours = () => {

    const {user} = useContext(AuthContext);
    const [allBookings, refetch] = useAssigned();
    const axiosSecure = useAxiosSecure();
    const filter = allBookings.filter(booking => booking.guideName.includes(user?.displayName))

    const handleChangeStatus = async(state, mail) => {
        
        const change = {
            state: state
        }
        
        const changeRes = await axiosSecure.patch(`/bookings/${mail}`, change);
        if (changeRes.data.modifiedCount > 0) {
            refetch();
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `${state}`,
                showConfirmButton: false,
                timer: 1500
            });

        }
    }

    return (
        <div>
            <table className="table  w-full mt-20 ml-10">
                <thead className="bg-blue-100">
                    <tr className="text-lg">
                        <th>
                            #
                        </th>
                        <th>Package Name</th>
                        <th>Tourist Name</th>
                        <th>Tour Date</th>
                        <th>Price</th>
                        <th></th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filter.map((booking, index) => <tr key={booking._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {booking.packageName}
                            </td>
                            <td>
                                {booking.userName}
                            </td>
                            <td>
                                {booking.tourDate}
                            </td>
                            <td>${booking.price}</td>
                            {booking.status === 'In Review' && <><th>
                                <button onClick={() => handleChangeStatus('Accepted', booking.userEmail)}
                                    className="btn btn-info btn-outline btn-sm">
                                    Accept
                                </button>
                            </th>
                            <th>
                                <button onClick={() => handleChangeStatus('Rejected', booking.userEmail)}
                                    className="btn btn-error btn-outline btn-sm">
                                    Reject
                                </button>
                            </th></>}
                            { booking.status !== 'In Review' && <td>
                                <h2>No actions available</h2>
                            </td>}
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default AssignedTours;