import { LOGO_URL } from "../utils/constants";

const Header = () =>{
    return (
        <div className="absolute bg-gradient-to-b from-black w-full z-10">
        <img src={LOGO_URL} alt="logo" className="w-[200px] mx-28 my-2 "  />
        </div>
    );
};

export default Header;