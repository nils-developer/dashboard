import React from "react";
import {TopBar} from "../global/TopBar";
import {Header} from "../../components/Header";
import {DashboardSection} from "./DashboardSection";
import {DashboardItem} from "./DashboardItem";
import {LineChart} from "../linechart/LineChart";

export const Dashboard = () => {
    return (
        <div className="w-full">
            <TopBar/>
            <div className="ml-5 mx-5">
                <Header
                    className="text-5xl my-5"
                    title={"Dashboard"}
                />
                <DashboardSection className="grid gap-4 grid-cols-4">
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4"
                        title={"Total"}
                        value={0.00}
                    />
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4"
                        title={"Invest"}
                        value={0.00}
                    />
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4"
                        title={"Bank"}
                        value={0.00}
                    />
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4"
                        title={"Profit / Loss"}
                        value={0.00}
                    />
                </DashboardSection>
                <DashboardSection className="grid gap-4 grid-cols-3 grid-rows-2 grid-flow-col mt-10">
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4 mr-4 h-72 col-span-2"
                        title={"Depot Value"}
                    >
                        <LineChart/>
                    </DashboardItem>
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4 mr-4 h-72 col-span-2"
                        title={"Dividend"}
                    >
                    </DashboardItem>
                    <DashboardItem
                        className="border border-neutral-200 rounded p-4 row-start-1 row-end-3"
                        title={"Transactions"}
                        value={0.00}
                    />
                </DashboardSection>
            </div>
        </div>
    )
}