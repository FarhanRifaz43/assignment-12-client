import { Link } from "react-router-dom";

const StoryCard = ({ story }) => {

    const { profilePicture, postingDate, title, user, mainStory, _id } = story;

    return (
        <div>
            <Link to={`/stories/${_id}`}>
                <div className="card card-side bg-base-100 h-56 border">
                    <figure><img src={profilePicture} alt="Movie" className="w-36 h-56 object-cover" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{title}</h2>
                        <p>By {user}</p>
                        <p>Posted on: {postingDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default StoryCard;