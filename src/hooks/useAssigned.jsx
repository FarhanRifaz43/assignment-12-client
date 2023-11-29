import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useAssigned = () => {

    const axiosPublic = useAxiosPublic();
    const { user} = useContext(AuthContext);
    const { refetch, data: allBookings = [] } = useQuery({
        queryKey: ['booking', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/bookings`);
            return res.data;
        }
    })

    return [allBookings, refetch]

};

export default useAssigned;