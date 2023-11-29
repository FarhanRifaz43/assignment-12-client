import { Link } from "react-router-dom";
import useStories from "../../../../hooks/useStories";
import StoryCard from "./StoryCard";

const Stories = () => {

    const [stories] = useStories();
    const showStories = stories.slice(0, 4)

    return (
        <div className="mb-20">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:w-[85%] mx-auto gap-4 mb-6">
                {
                    showStories.map(story => <StoryCard key={story._id} story={story}></StoryCard>)
                }
            </div>
            <div className="w-fit mx-auto">
                <Link to={'/stories'}><button className="btn btn-info btn-outline">All Stories</button></Link>
            </div>
        </div>
    );
};

export default Stories;