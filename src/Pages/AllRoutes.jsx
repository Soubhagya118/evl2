import { Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Dashboard from "./Dashboard";
import RegisterPageTwo from "./RegisterPageTwo";
import RegisterPageOne from "./RegisterPageOne";
//import User from "./User";
//import { Link } from "react-router-dom";
const Navbar =()=>{
    return (
        <>
        <nav style={{display:"flex",gap:20}}>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/register/one">Registration one</Link>
            <Link to="/register/two">Registration Two</Link>
            {/* <Link to="/user">User</Link> */}


        </nav>
        </>
    )
}

const AllRoutes = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/register/one" element={<RegisterPageOne/>}/>
            <Route path="/register/two" element={<RegisterPageTwo/>}/>
            {/* <Route path="/user" element={<User/>}/> */}


        </Routes>
    </>


  )
}

export  default AllRoutes