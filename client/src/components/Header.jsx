// //import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { useDispatch, useSelector } from "react-redux";
// import { removeUserData, setUserData } from "../Redux/slices/user_slice";

// //const Header = () => {

// //     const dispatch = useDispatch();
// //     const navigate = useNavigate();

// //     const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
// //     const user = useSelector((state) => state.user.userData);

// //     const handleLogout = () => {
// //         dispatch(removeUserData());
// //         navigate("/");
// //     }

// //     return (
// //         <header className="flex h-[80px] items-center justify-center shadow-md">
// //             <div className="mx-5 flex w-full max-w-[1550px] items-center justify-between">
// //                 {/* image section */}
// //                 <div className="flex h-[60px] w-[120px] items-center justify-center overflow-hidden">
// //                     <img src="/logo.png" alt="Logo" />
// //                 </div>
// //                 {/* nav links  */}
// //                 <GiHamburgerMenu className="text-xl md:hidden" />
// //                 <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
// //                     <Link to="/">
// //                         Home
// //                     </Link>
// //                     <Link to="/about">
// //                         About
// //                     </Link>

// //                     {/* Conditional Rendering */}
// //                     {isAuthenticated ? (
// //                         <>
// //                             <Link to="/search">
// //                                 <FaSearch className="text-xl" />
// //                             </Link>
// //                             <Link to="/upload">
// //                                 <MdOutlineFileUpload className="text-[24px]" />
// //                             </Link>
// //                             <Link to="/profile">
// //                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
// //                                     Profile
// //                                 </button>
// //                             </Link>
// //                             <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600" onClick={handleLogout}>
// //                                 Logout
// //                             </button>
// //                         </>
// //                     ) : (
// //                         <>

// //                             <Link to="/login">
// //                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
// //                                     Login
// //                                 </button>
// //                             </Link>
// //                             <Link to="/signup">
// //                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
// //                                     Signup
// //                                 </button>
// //                             </Link>
// //                         </>

// //                     )}

// //                 </div>
// //             </div>
// //         </header>
// //     );
// // };

// // export default Header;
// import React from 'react';
// import { FaSearch } from "react-icons/fa";
// import { MdOutlineFileUpload } from "react-icons/md";


// const Header = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
//     const user = useSelector((state) => state.user.userData);

//     const handleLogout = () => {
//         dispatch(removeUserData());
//         navigate("/");
//     }
//     return (
//         <header className='flex h-[80px] border items-center justify-center border-black'>
//             <div className="flex mx-5 w-full max-w-[1550px] items-center justify-between  ">
//                 {/* image section */}
//                 <div className='flex h-[60px] w-[120px] items-center justify-center overflow-hidden'>
//                     <img src="/logo (1).png" alt="logo" />
//                 </div>
//                 {/* Nav links */}
//                 {/* <GiHamburgerMenu className="text-xl md:hidden " />

//                 <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
//                     <Link to="/">Home</Link>
//                     <Link to="/about">About</Link>
//                     <Link to="/login">
//                         <button className="hover:bg-blue-600 font-semibold bg-blue-500 px-2 py-2 rounded-xl">
//                             Login
//                         </button>
//                     </Link>
//                     <Link to="/signup">
//                         <button className="hover:bg-blue-600 font-semibold bg-blue-500 px-2 py-2 rounded-xl">
//                             Signup
//                         </button>
//                     </Link>
//                     {/* <Link to="/search">
//                         <FaSearch className="text-xl" />

//                     </Link>
//                     <Link to="/upload">
//                         <MdOutlineFileUpload className="text-[24px]" />

//                     </Link>
//                     <Link to="/profile">
//                         <button className="hover:bg-blue-600 font-semibold bg-blue-500 px-2 py-2 rounded-xl">
//                             Profile
//                         </button>
//                     </Link>
//                     <button className="hover:bg-blue-600 font-semibold bg-blue-500 px-2 py-2 rounded-xl">

//                         Logout
//                     </button> */}
//                 {/* </div>
//             </div>

//         </header>


//     );
// };

// export default Header; */}
//                 <GiHamburgerMenu className="text-xl md:hidden" />
//                 <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
//                     <Link to="/">
//                         Home
//                     </Link>
//                     <Link to="/about">
//                         About
//                     </Link>

//                     {/* Conditional Rendering */}
//                     {isAuthenticated ? (
//                         <>
//                             <Link to="/search">
//                                 <FaSearch className="text-xl" />
//                             </Link>
//                             <Link to="/upload">
//                                 <MdOutlineFileUpload className="text-[24px]" />
//                             </Link>
//                             <Link to="/profile">
//                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
//                                     Profile
//                                 </button>
//                             </Link>
//                             <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600" onClick={handleLogout}>
//                                 Logout
//                             </button>
//                         </>
//                     ) : (
//                         <>

//                             <Link to="/login">
//                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
//                                     Login
//                                 </button>
//                             </Link>
//                             <Link to="/signup">
//                                 <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
//                                     Signup
//                                 </button>
//                             </Link>
//                         </>

//                     )}

//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Navbar;
import React from 'react';
import { FaSearch } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//import { removeUserData } from '../redux/actions/userActions';
import { removeUserData, setUserData } from "../Redux/slices/user_slice";


const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
    const user = useSelector((state) => state.user.userData);

    const handleLogout = () => {
        dispatch(removeUserData());
        navigate("/");
    };

    return (
        <header className='flex h-[80px] border items-center justify-center border-black'>
            <div className="flex mx-5 w-full max-w-[1550px] items-center justify-between">
                {/* Logo Section */}
                <div className='flex h-[60px] w-[120px] items-center justify-center overflow-hidden'>
                    <img src="/logo (1).png" alt="logo" />
                </div>

                {/* Nav Links */}
                <GiHamburgerMenu className="text-xl md:hidden" />
                <div className="hidden md:flex md:items-center md:justify-center md:gap-4">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>

                    {isAuthenticated ? (
                        <>
                            <Link to="/search">
                                <FaSearch className="text-xl" />
                            </Link>
                            <Link to="/upload">
                                <MdOutlineFileUpload className="text-[24px]" />
                            </Link>
                            <Link to="/profile">
                                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                                    Profile
                                </button>
                            </Link>
                            <button
                                className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                        </>
                    ) : (
                        <>
                            <Link to="/login">
                                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                                    Login
                                </button>
                            </Link>
                            <Link to="/signup">
                                <button className="rounded-xl bg-blue-500 px-5 py-2 font-semibold hover:bg-blue-600">
                                    Signup
                                </button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;
