import Banner from "./Banner";
import TabsComponent from "./Tourism/TabsComponent";
import TourTypes from "./Type/TourTypes";
import Stories from "./stories/Stories";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-5xl font-bold mb-16">What We <span className="text-blue-400">Offer</span></h2>
            <TabsComponent></TabsComponent>
            <h2 className="text-center text-5xl font-bold mb-16">Find Your <span className="text-blue-400">Type</span></h2>
            <TourTypes></TourTypes>
            <h2 className="text-center text-5xl font-bold mb-16">Your <span className="text-blue-400">Stories</span></h2>
            <Stories></Stories>
        </div>
    );
};

export default Home;