import { useState,useEffect, } from 'react';
import { Link, NavLink ,useLocation} from 'react-router-dom';
import image from '../assets/icon.jpg';
import {IoPersonCircleOutline } from "react-icons/io5";
import { toast } from "react-toastify"
import Cookies from "js-cookie"
import { selectStatus,LogoutUser, selectFirstName } from '../slice/userSlice';
import { useAppDispatch, useAppSelector } from '../store';
import { Link as ScrollLink } from 'react-scroll';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
//  const [count, setCount] = useState(0);
 // const [cartItems, setCartItems] = useState([]);
  const location = useLocation();
  const dispatch = useAppDispatch()
  const status = useAppSelector(selectStatus);
  const firstName = useAppSelector(selectFirstName);


  useEffect(() => {
    // Scroll to the top of the page when the location changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
}

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    // Close the account slider when opening the menu
    setShowDiv(false);
  };

  // Close the menu when a navigation occurs
  useEffect(() => {
    setMenuOpen(false);
    setShowDiv(false);
  }, [location.pathname]);
 
  const [showDiv, setShowDiv] = useState(false);

  const isAuthenticated = !!firstName;
  const username = firstName || "";

  const toggleDiv = () => {
    setShowDiv(!showDiv);
    // Close the menu when opening the account slider
    setMenuOpen(false);
  };



  const handleLogout = async () => {
    try {
      // Call the logout API function
      await dispatch(LogoutUser());
  
      // Remove the 'firstname' cookie
      Cookies.remove('firstname');
  
      toast.success(" logged out successfully",{
        position: "bottom-left"
      })
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="flex flex-col justify-center mx-auto px-4 pb-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className='flex items-center justify-between'>
          <Link to="/" className="pt-2 flex items-center">
            <img className="h-16" src={image}  alt="Forex Logo" />
            <h2 className="font-bold text-xl">Forex</h2>
          </Link>

          {/* search section  */}
          <div className='hidden sm:flex  '>
          <div className={`lg:flex space-x-6 hidden `}>

           <NavLink 
            to="/"           
            className="hover:text-brightGreen"
            style={({isActive}) => isActive ? activeStyles : undefined}>
              Home
            </NavLink>

            <NavLink 
            to="chat"           
            className="hover:text-brightGreen"
            style={({isActive}) => isActive ? activeStyles : undefined}>
              Chat
            </NavLink>

            <ScrollLink 
              to="features"
              smooth={true}
              duration={500}
              offset={-50} // adjust for navbar height
              className="cursor-pointer hover:text-brightGreen"
            >
              Features
            </ScrollLink>

            {/* <ScrollLink 
              to="info"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-brightGreen"
            >
            Info
            </ScrollLink> */}

            <ScrollLink 
              to="pricing"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-brightGreen"
            >
            Pricing
            </ScrollLink>

          {/* This link is hidden on screens smaller than LG            */}

            <ScrollLink 
              to="testimonial"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-brightGreen"
            >
            Testimonial
            </ScrollLink>

            <ScrollLink 
              to="contact"
              smooth={true}
              duration={500}
              offset={-50}
              className="cursor-pointer hover:text-brightGreen"
            >
            Contact Us
            </ScrollLink>

            </div>

            
          </div>
          
          <div className='flex space-x-6'>          

                <button 
                className="hover:text-brightGreen text-2xl"
                onClick={toggleDiv}>
                  <IoPersonCircleOutline/>
                </button>
            <button
              id="menu-btn"
              className={`hamburger lg:hidden focus:outline-none ${
                menuOpen ? 'open' : ''
              }`}
              onClick={toggleMenu}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        
              
      </div>

        {/* Account slider section */}
        {showDiv && (
          <div className="fixed right-5 top-20 h-32 shadow-2xl w-1/3 bg-white overflow-hidden transition-all duration-1000">
            <div className="p-4 space-y-4">
              
              {isAuthenticated ?
              ( <>
                <h1>hello, {username}</h1>
                <button
                  disabled={status === 'loading'}
                  onClick={handleLogout}
                  className="flex justify-center p-3 px-6 w-full md:mt-4 text-white font-bold bg-brightBlue rounded-lg baseline hover:bg-brightBlueLight"
                >
                  {status === 'loading' ? 'Logging out...' : 'Logout'}
                </button>
                </>):
                ( <>
                  <h1>Welcome </h1>
                  <Link
                  to="login"
                  className="flex justify-center p-3 px-6 w-full md:mt-4 text-white font-bold bg-brightBlue rounded-lg baseline hover:bg-brightBlueLight"
                >
                  Login
                </Link>
                </>)
                }
              
            </div>
          </div>
        )}

        {/* hamburg menu div */}      
        <div
          id="menu"
          className={`lg:hidden  ${
            menuOpen ? 'flex flex-col' : 'hidden'
          } items-center self-end py-8 mt-10 space-y-6 font-bold bg-white xsm:w-64 xsm:self-center left-6 right-6 drop-shadow-md`}
        >
          <Link to="/">Home</Link>
          <Link to="chat">Chat</Link>
          <ScrollLink to="features" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-brightGreen">
            Features
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-brightGreen">
            Pricing
          </ScrollLink>
          <ScrollLink to="testimonial" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-brightGreen">
            Testimonial
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-50} onClick={() => setMenuOpen(false)} className="cursor-pointer hover:text-brightGreen">
            Contact
          </ScrollLink>
        </div>

    </nav>

    
  );
}
