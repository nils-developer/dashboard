import React, {useEffect, useState} from "react";
import {Header} from "../../components/Header";
import {DashboardSection} from "./DashboardSection";
import {DashboardItem} from "./DashboardItem";
import {ValueChart} from "../depot/ValueChart";
import {AddItemButton} from "./AddItemButton";
import {Transactions} from "../transactions/Transactions";
import {fetchBalanceFromUser} from "../../data/fetchBalanceArray";
import {fetchTotalAmountFromUser} from "../../data/fetchTotalAmount";
import {fetchInvestmentAmountFromUser} from "../../data/fetchInvestmentAmount";

const XLDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4 mr-4 h-72 col-span-2"
const MDDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4 row-start-1 row-end-3"
const SMDashboardItemStyle: string = "bg-gray-100 drop-shadow-xl border border-emerald-600 rounded p-4"

export const Dashboard = () => {
    const [totalBankValue, setTotalBankValue] = useState<number>(0)
    const [totalAmount, setTotalAmount] = useState<number>(0)
    const [totalInvest, setTotalInvest] = useState<number>(0)

    useEffect(() => {
        fetchBalanceFromUser(setTotalBankValue)
        fetchTotalAmountFromUser(setTotalAmount)
        fetchInvestmentAmountFromUser(setTotalInvest)
    }, [])

    return (
        <>
            <div className="flex justify-between">
                <Header
                    title={"Dashboard"}
                />
                <div className="flex">
                    <AddItemButton uri="/stock" text="Add Stock"/>
                    <AddItemButton uri="/addInvestment" text="Add Investment"/>
                    <AddItemButton uri="/addBankItem" text="Add Bank"/>
                </div>
            </div>
            <DashboardSection className="grid gap-4 grid-cols-4">
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Total"}
                    value={isNaN(totalAmount) ? 0.00 : totalAmount.toFixed(2)}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Invest"}
                    value={isNaN(totalInvest) ? 0.00 : totalInvest.toFixed(2)}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Bank"}
                    value={isNaN(totalBankValue) ? 0.00 : totalBankValue.toFixed(2)}
                />
                <DashboardItem
                    className={SMDashboardItemStyle}
                    title={"Profit / Loss"}
                    value={(0.00).toFixed(2)}
                />
            </DashboardSection>
            <DashboardSection className="grid gap-4 grid-cols-3 grid-rows-2 grid-flow-col mt-10">
                <DashboardItem
                    className={XLDashboardItemStyle}
                    title={"Depot Value"}
                >
                    <ValueChart className="h-full"/>
                </DashboardItem>
                <DashboardItem
                    className={XLDashboardItemStyle}
                    title={"Dividend"}
                >
                </DashboardItem>
                <DashboardItem
                    className={MDDashboardItemStyle}
                    title={"Transactions"}
                >
                    <Transactions isButtonSet={false}/>
                </DashboardItem>
            </DashboardSection>
        </>
    )
}