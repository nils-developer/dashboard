import React from 'react'
import ItemProvider from "./contexts/ItemContext";
import {Routes, Route} from "react-router-dom";
import {TopBar} from "./scenes/global/TopBar";
import {Dashboard} from "./scenes/dashboard/Dashboard";
import {Depot} from "./scenes/depot/Depot";
import {SideBar} from "./scenes/global/SideBar";
import {AddBalance} from "./scenes/balance/AddBalance";
import {Transactions} from "./scenes/transactions/Transactions";
import {Stock} from "./scenes/stock/Stock";
import {Investments} from "./scenes/investments/Investments";

const App = () => {
    return (
        <ItemProvider>
            <div className="flex font-light h-screen overflow-hidden bg-emerald-100">
                <SideBar/>
                <div className="flex grow flex-col">
                <TopBar/>
                    <div className="px-4 border-black rounded-xl">
                        <Routes>
                            <Route path="/" element={<Dashboard/>}/>
                            <Route path="/line" element={<Depot/>}/>
                            <Route path="/addBankItem" element={<AddBalance itemType="balance"/>}/>
                            <Route path="/addInvestment" element={<Investments/>}/>
                            <Route path="/transactions" element={<Transactions/>}/>
                            <Route path="/stock" element={<Stock/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </ItemProvider>
    );
}

export default App;
