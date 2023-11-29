import { useContext } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useWishlist = () => {

    const axiosPublic = useAxiosPublic();
    const { user} = useContext(AuthContext);
    const { refetch, data: wishlist = [] } = useQuery({
        queryKey: ['wish', user?.email],
        queryFn: async() => {
            const res = await axiosPublic.get(`/wishlist?email=${user.email}`);
            return res.data;
        }
    })

    return [wishlist, refetch]
};

export default useWishlist;