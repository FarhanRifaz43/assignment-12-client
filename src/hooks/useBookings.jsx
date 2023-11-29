import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useBookings = () => {

    const axiosPublic = useAxiosPublic();
    const { user} = useContext(AuthContext);
    const { refetch, data: bookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/bookings?email=${user.email}`);
            return res.data;
        }
    })

    return [bookings, refetch]
};

export default useBookings;