import useAxiosPublic from "./useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const useImageHost = async(data) => {
        const imageFile = { image: data.image[0] }
        const res = await useAxiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
}

export default useImageHost;