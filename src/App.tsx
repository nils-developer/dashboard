import React from 'react'
import ItemProvider from "./contexts/ItemContext";
import {Routes, Route} from "react-router-dom";
import {TopBar} from "./scenes/global/TopBar";
import {Dashboard} from "./scenes/dashboard/Dashboard";
import {Depot} from "./scenes/depot/Depot";
import {SideBar} from "./scenes/global/SideBar";
import {AddBalance} from "./scenes/balance/AddBalance";
import {Transactions} from "./scenes/transactions/Transactions";

const App = () => {
    return (
        <ItemProvider>
            <div className="flex font-light h-screen bg-gray-200">
                <SideBar/>
                <div className="flex grow flex-col">
                <TopBar/>
                    <div className="px-4">
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/line" element={<Depot/>}/>
                            <Route path="/addBankItem" element={<AddBalance itemType="balance"/>}/>
                            <Route path="/transactions" element={<Transactions/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </ItemProvider>
    );
}

export default App;
