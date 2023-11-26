import { useLoaderData } from "react-router-dom";
import { FacebookIcon, FacebookShareButton } from "react-share";
import { url } from "../../../url/Url";

const StoryDetail = () => {

    const { user, title, profilePicture, postingDate, mainStory, _id } = useLoaderData();
    const shareUrl = `${url}/stories/${_id}`;

    return (
        <div className="pt-36 mb-20 md:w-[85%] mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
            <div className="card col-span-1 bg-base-200 shadow-xl">
                <figure><img src={profilePicture} alt="Shoes" className="w-64 mt-8 rounded-2xl h-64 object-cover" /></figure>
                <div className="card-body text-center">
                    <h2 className="text-2xl font-bold">{user}</h2>
                    <p>Posted on {postingDate}</p>
                    <div className="border-2 p-2 rounded-lg bg-blue-600 w-fit mx-auto">
                        <FacebookShareButton className="flex items-center gap-3 some-network__share-button" url={shareUrl} openShareDialogOnClick><span className="font-bold text-white">Share on </span><FacebookIcon size={32} round></FacebookIcon></FacebookShareButton>
                    </div>
                </div>
            </div>
            <div className="col-span-2">
                <div className="card bg-base-200 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title text-3xl pl-4">{title}</h2>
                        <p className="text-gray-500 p-4 some-network">{mainStory}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StoryDetail;