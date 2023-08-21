import React from "react";
import {Header} from "../../components/Header";
import {ValueChart} from "./ValueChart";

export const Depot = () => {
    return(
        <div className="overflow-hidden">
            <Header
                title={"Depot Value"}
            />
            <ValueChart className="h-96 p-5 bg-gray-100 border border-emerald-600 rounded-xl"/>
        </div>
    )
}