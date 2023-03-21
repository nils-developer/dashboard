import React from "react";
import {Header} from "../../components/Header";
import {DashboardSection} from "./DashboardSection";
import {DashboardItem} from "./DashboardItem";
import {LineChart} from "../../components/LineChart";
import {AddItemButton} from "./AddItemButton";

const XLDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4 mr-4 h-72 col-span-2"
const MDDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4 row-start-1 row-end-3"
const SMDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4"

export const Dashboard = () => {
    return (
        <>
            <div className="flex justify-between">
                <Header
                    title={"Dashboard"}
                />
                <div className="flex">
                    <AddItemButton uri="/addStock" text="Add Stock"/>
                    <AddItemButton uri="/addInvestment" text="Add Investment"/>
                    <AddItemButton uri="/addBankItem" text="Add Bank"/>
                </div>
            </div>
            <DashboardSection className="grid gap-4 grid-cols-4">
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Total"}
                    value={0.00}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Invest"}
                    value={0.00}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Bank"}
                    value={0.00}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Profit / Loss"}
                    value={0.00}
                />
            </DashboardSection>
            <DashboardSection className="grid gap-4 grid-cols-3 grid-rows-2 grid-flow-col mt-10">
                <DashboardItem
                    className={XLDashboardItemStyle}
                    title={"Depot Value"}
                >
                    <LineChart className="h-full"/>
                </DashboardItem>
                <DashboardItem
                    className={XLDashboardItemStyle}
                    title={"Dividend"}
                >
                </DashboardItem>
                <DashboardItem
                    className={MDDashboardItemStyle}
                    title={"Transactions"}
                />
            </DashboardSection>
        </>
    )
}