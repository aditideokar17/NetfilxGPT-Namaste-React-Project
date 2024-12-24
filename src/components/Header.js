import { LOGO_URL } from "../utils/constants";
import { USER_AVATAR } from "../utils/constants";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



const Header = () => {

    const user = useSelector((store)=> store.user);

    const navigate = useNavigate();
    

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            // navigate("/error");
        });
    }

    return (
        <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
            <img src={LOGO_URL} alt="logo" className="w-[200px] mx-28 my-2 " />

           {user && (<div className="flex p-2 mt-5 gap-5">
                <img src={USER_AVATAR} alt="user-icon" className="w-12 h-12 " />
                <button onClick={handleSignOut} className="h-12 px-3 py-1 rounded-md bg-red-700 text-white font-semibold">Sign out</button>
            </div>)}
        </div>
    );
};

export default Header;