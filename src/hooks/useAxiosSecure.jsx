import axios from "axios";
import { url } from "../url/Url";

const axiosSecure = axios.create({
    baseURL: url
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;