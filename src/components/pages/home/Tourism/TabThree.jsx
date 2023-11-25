import useGuides from "../../../../hooks/useGuides";
import GuideCard from "./GuideCard";

const TabThree = () => {
    const [guides, loading] = useGuides();

    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto w-fit gap-8 mt-12">
            {
              loading ? <span className="loading loading-spinner text-info"></span> : guides.map(guide => <GuideCard key={guide._id} guide={guide}></GuideCard>)
            }
        </div>
    );
};

export default TabThree;