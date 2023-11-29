import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUsers from "../../hooks/useUsers";

const ManageUsers = () => {

    const [users, refetch] = useUsers();
    const axiosSecure = useAxiosSecure();

    const handleMakeGuide = async (data) => {
        const guide = {
            name: data.displayName,
            email: data.email,
            image: data.photoURL
        }
        const guideUser = {
            role: 'guide'
        }

        const guideRes = await axiosSecure.post('/guides', guide);
        const guideUserRes = await axiosSecure.patch(`/users/${data.email}`, guideUser);
        window.location.reload();
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
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                        <th>Actions</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => <tr key={user._id}>
                            <th>
                                {index + 1}
                            </th>
                            <td>
                                {user.displayName}
                            </td>
                            <td>
                                {user.email}
                            </td>
                            <td>{user.role}</td>
                            <td>
                                {(user.role === 'user') ? <button onClick={() => handleMakeGuide(user)}
                                    className="btn btn-outline btn-info btn-sm">
                                    Make Guide
                                </button> : <button disabled
                                    className="btn btn-outline btn-info btn-sm">
                                    Make Guide
                                </button>}
                            </td>
                            <td>
                                {(user.role === 'user') ? <button
                                    className="btn btn-outline btn-info btn-sm">
                                    Make Admin
                                </button> : <button disabled
                                    className="btn btn-outline btn-info btn-sm">
                                    Make Admin
                                </button>}
                            </td>
                        </tr>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;