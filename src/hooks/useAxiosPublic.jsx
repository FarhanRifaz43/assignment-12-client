import axios from "axios";
import { url } from "../url/Url";

const axiosPublic = axios.create({
    baseURL: url
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;