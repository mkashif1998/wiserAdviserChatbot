import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./View/Index";
import LiveChat from "./View/LiveChats";

const Routers = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/liveChat" element={<LiveChat/>} />
        </Routes>
    );
}

export default Routers;