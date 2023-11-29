import { useLoaderData } from "react-router-dom";
import TabCard from "../home/Tourism/TabCard";

const TourByType = () => {

    const tour = useLoaderData();

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-auto w-fit gap-8 mt-12">
            <TabCard pack={tour}></TabCard>
        </div>
    );
};

export default TourByType;