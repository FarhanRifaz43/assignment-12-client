import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import StoryForm from "./tourist/StoryForm";
import useGuide from "../hooks/useGuide";
import useAdmin from "../hooks/useAdmin";
import DetailFrom from "./guide/DetailFrom";


const MyProfile = () => {

    const {user} = useContext(AuthContext);
    const [isGuide ] = useGuide();
    const [isAdmin] = useAdmin();

    return (
        <div>
            <img src="https://i.ibb.co/5GLNp3v/pexels-eberhard-grossgasteiger-3389613.jpg" className="h-96 min-w-[1000px] object-cover" alt="" />
            <div className="ml-36 -mt-72 flex items-center gap-8">
                <img src={user?.photoURL} alt="" className="w-60 h-60 object-cover shadow-2xl rounded-lg mb-5" />
                <div>
                    <h2 className="text-5xl font-bold">{user?.displayName}</h2>
                    <h2 className="text-xl">{user?.email}</h2>
                </div>
            </div>
            <div>
                {(!isGuide && !isAdmin) && <StoryForm></StoryForm>}
                {isGuide && <DetailFrom></DetailFrom>}
            </div>
        </div>
    );
};

export default MyProfile;