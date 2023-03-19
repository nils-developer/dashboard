import React from 'react'
import {ProSidebarProvider} from "react-pro-sidebar";
import {NavBar} from './scenes/global/NavBar'
import {Dashboard} from "./scenes/dashboard/Dashboard";

const App = () => {
    return (
        <div className="flex flex-row font-light">
            <ProSidebarProvider>
                <NavBar children/>
            </ProSidebarProvider>
            <Dashboard/>
        </div>
    );
}

export default App;
