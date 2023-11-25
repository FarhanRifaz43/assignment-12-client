
import usePackages from "../../../../hooks/usePackages";
import TabCard from "./TabCard";

const TabTwo = () => {

    const [packages] = usePackages();
    const showPackage = packages.slice(0, 6)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-fit gap-8 mt-12">
            {
                showPackage.map(pack => <TabCard key={pack._id} pack={pack}></TabCard>)
            }
        </div>
    );
};

export default TabTwo;