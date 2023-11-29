import { useLoaderData } from "react-router-dom";

const GuideProfile = () => {

    const { name, image, phone, email, education, skills, experience, rating, comments } = useLoaderData();

    return (
        <div>
            <section>
                <div className="h-96 bg-[url('https://i.ibb.co/5GLNp3v/pexels-eberhard-grossgasteiger-3389613.jpg')]"></div>
                <div className="ml-36 -mt-48 lg:flex items-center gap-8">
                    <img src={image} alt="" className="w-60 h-60 object-cover shadow-2xl rounded-lg mb-5" />
                    <div>
                        <h2 className="text-5xl font-bold">{name}</h2>
                        <h2 className="text-xl">Tour Guide</h2>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 w-[85%] mx-auto mt-10 mb-36">
                    <div className="w-[80%]">
                        <h2 className="font-bold text-2xl">Basic Info</h2>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">Phone Number:</h2>
                            <p className="text-gray-400">{phone}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">E-mail:</h2>
                            <p className="text-gray-400">{email}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">Rating:</h2>
                            <p className="text-gray-400">{rating} Stars</p>
                        </div>
                    </div>
                    <div className="w-[80%] lg:mt-0 mt-8">
                        <h2 className="font-bold text-2xl">Education & Experience</h2>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">Educational Qualification:</h2>
                            <p className="text-gray-400">{education}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">Experience:</h2>
                            <p className="text-gray-400">{experience}</p>
                        </div>
                        <div className="mt-4 flex items-center justify-between">
                            <h2 className="text-lg">Job Skills:</h2>
                            <ul className="text-gray-400">
                                {
                                    skills.map(skill => <li className="mt-2 list-disc" key={skill}>{skill}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-[85%] mx-auto">
                    <h2 className="font-bold text-2xl text-center mb-12">Comments & Reviews</h2>
                    <div className="grid lg:grid-cols-2 grid-cols-1 w-fit lg:gap-10 mx-auto">
                        {
                            comments.map(comment =>
                                <>
                                    <div className="card w-96 bg-base-100 border mb-10">
                                        <div className="card-body">
                                            <h2 className="card-title">{comment.user}</h2>
                                            <p>{comment.comment}</p>
                                        </div>
                                    </div>
                                </>)
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default GuideProfile;