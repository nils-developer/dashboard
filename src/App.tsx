import React from 'react'
import {Routes, Route} from "react-router-dom";
import {TopBar} from "./scenes/global/TopBar";
import {Dashboard} from "./scenes/dashboard/Dashboard";
import {Depot} from "./scenes/depot/Depot";
import {SideBar} from "./scenes/global/SideBar";
import {AddItem} from "./scenes/stock/AddItem";

const App = () => {
    return (
        <div className="flex font-light h-screen bg-gray-200">
            <SideBar/>
            <div className="flex grow flex-col">
            <TopBar/>
                <div className="px-4">
                    <Routes>
                        <Route path="/" element={<Dashboard/>}/>
                        <Route path="/line" element={<Depot/>}/>
                        <Route path="/addBank" element={<AddItem itemType="bank"/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
