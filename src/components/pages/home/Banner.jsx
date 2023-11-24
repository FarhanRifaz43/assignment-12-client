const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
                    <img src="https://i.ibb.co/j6qYb5n/bangladesh-3673378-1280.jpg" className="max-w-xl rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-8xl font-bold">Find Your Next Perfect <span className="text-blue-400">Tour</span></h1>
                        <p className="py-6 text-xl text-gray-500">Discover amazing places at exclusive deals. <br />
                            Eat, Shop, Visit interesting places around Bangladesh.</p>
                        <button className="btn btn-outline btn-info">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;