import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../uttils/useOnlineStatus";
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';

const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  return (
    <div className='flex justify-between bg-orange-50 mb-5 shadow-lg '>
      <div>
        <img className='w-40' src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All" />
      </div>
      <div>
        <ul className="flex mt-8 text-2xl">
        <li className="pl-8 text-lg font-normal">
           Online Status: {onlineStatus?"✅":"🔴"} 
          </li>
        <li className="pl-8 text-lg font-normal">
           <HomeIcon/>
            <Link to="/">Home</Link>
          </li>
          <li className="pl-8 text-lg font-normal">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pl-8 text-lg font-normal">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pl-8 text-lg font-normal">
            <ShoppingCartIcon/>
            Cart</li>
            <li className="pl-8">
              <LoginIcon/>
            </li>
          <button
            className=" mr-4 text-lg font-normal"
            onClick={() => {
              if (btnName === "Login") setbtnName("Logout");
              else {
                setbtnName("Login") ;
              }
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
