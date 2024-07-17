///import React from "react";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { useSelector } from "react-redux";
// import About from "./pages/About";
// import Faq from "./pages/Faq";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Search from "./pages/Search";
// import Profile from "./pages/Profile";
// import Upload from "./pages/Upload";


// const App = () => {
//   const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

//   return (
//     <Router>
//       <Header />

//       <div>
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           {isAuthenticated ? (
//             <>
//               <Route path="/upload" element={<Upload />} />
//               <Route path="/profile" element={<Profile />} />
//               <Route path="/search" element={<Search />} />
//             </>
//           ) : (
//             <>
//               <Route path="/signup" element={<Signup />} />
//               <Route path="/login" element={<Login />} />
//             </>
//           )}
//           <Route path="/about" element={<About />} />
//           <Route path="/faq" element={<Faq />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
// import React from 'react';
// import Home from "./pages/Home"

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from './components/Header';


// const App = () => {
//     const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

//     return (
//         //         <Router>
//         //             <Header />
//         //             <Routes>
//         //                 <Route exact path='/' element={<Home />} />
//         //                 {isAuthenticated ? (
//         //                     <>
//         //                         <Route path="/upload" element={<Upload />} />
//         //                         <Route path="/profile" element={<Profile />} />
//         //                         <Route path="/search" element={<Search />} />
//         //                     </>
//         //                 ) : (
//         //                     <>
//         //                         <Route path="/signup" element={<Signup />} />
//         //                         <Route path="/login" element={<Login />} />
//         //                     </>
//         //                 )}
//         //                 <Route path="/about" element={<About />} />
//         //                 <Route path="/faq" element={<Faq />} />
//         //             </Routes>

//         //         </Router>

//         //     );
//         // };



//         // export default App;
//         <Router>
//             <Header />

//             <div>
//                 <Routes>
//                     <Route exact path="/" element={<Home />} />
//                     {isAuthenticated ? (
//                         <>
//                             <Route path="/upload" element={<Upload />} />
//                             <Route path="/profile" element={<Profile />} />
//                             <Route path="/search" element={<Search />} />
//                         </>
//                     ) : (
//                         <>
//                             <Route path="/signup" element={<Signup />} />
//                             <Route path="/login" element={<Login />} />
//                         </>
//                     )}
//                     <Route path="/about" element={<About />} />
//                     <Route path="/faq" element={<Faq />} />
//                 </Routes>
//             </div>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux

import Home from './pages/Home';
import Header from './components/Header';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Upload from './pages/Upload';
import Profile from './pages/Profile';
import Search from './pages/Search';
import About from './pages/About';
import Faq from './pages/Faq';

const App = () => {
    const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

    console.log("isAuthenticated: ", isAuthenticated); // Debugging line

    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
                {isAuthenticated ? (
                    <>
                        <Route path="/upload" element={<Upload />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/search" element={<Search />} />
                    </>
                ) : (
                    <>
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/login" element={<Login />} />
                    </>
                )}
                <Route path="/about" element={<About />} />
                <Route path="/faq" element={<Faq />} />


            </Routes>
        </Router>
    );
};

export default App;
