import Banner from "./Banner";
import TabsComponent from "./Tourism/TabsComponent";
import TourTypes from "./Type/TourTypes";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-5xl font-bold mb-16">What We <span className="text-blue-400">Offer</span></h2>
            <TabsComponent></TabsComponent>
            <h2 className="text-center text-5xl font-bold mb-16">Tour <span className="text-blue-400">Types</span></h2>
            <TourTypes></TourTypes>
        </div>
    );
};

export default Home;