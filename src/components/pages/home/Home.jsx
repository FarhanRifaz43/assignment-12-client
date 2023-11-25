import Banner from "./Banner";
import TabsComponent from "./Tourism/TabsComponent";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-center text-5xl font-bold mb-16">What We <span className="text-blue-400">Offer</span></h2>
            <TabsComponent></TabsComponent>
        </div>
    );
};

export default Home;