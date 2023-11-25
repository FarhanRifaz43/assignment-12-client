
import usePackages from "../../../../hooks/usePackages";
import TabCard from "./TabCard";

const TabTwo = () => {

    const [packages, loading] = usePackages();

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-fit gap-8 mt-12">
            {
                loading ? <span className="loading loading-spinner text-info text-center"></span> : packages.map(pack => <TabCard key={pack._id} pack={pack}></TabCard>)
            }
        </div>
    );
};

export default TabTwo;