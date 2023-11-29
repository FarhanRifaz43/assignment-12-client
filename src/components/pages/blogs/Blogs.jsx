import useStories from "../../../hooks/useStories";
import StoryCard from "../home/stories/StoryCard";

const Blogs = () => {

    const [stories] = useStories();

    return (
        <div className="pt-28">
            <div className="grid lg:grid-cols-2 grid-cols-1 md:w-[85%] mx-auto gap-4 mb-6">
                {
                    stories.map(story => <StoryCard key={story._id} story={story}></StoryCard>)
                }
            </div>
        </div>
    );
};

export default Blogs;