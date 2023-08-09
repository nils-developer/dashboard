import {Link} from "react-router-dom";
import {DropdownMenu} from "./Dropdown";

const linkStyle: string = "grow pl-5 py-3 ease-in-out duration-300 hover:pl-8 hover:bg-emerald-300 hover:font-medium"
const dropDownStyle: string = "flex"

export const SideBar = () => {
    return (
        <div className="flex flex-col w-52 border-r border-emerald-600 bg-emerald-500 text-white h-screen">
            <h2 className="mx-auto my-3 text-2xl">NAVIGATION</h2>
            <div className="flex flex-col mt-10 text-lg">
                <Link
                    to="/"
                    className={linkStyle}
                >Dashboard</Link>
                <Link
                    to="/line"
                    className={linkStyle}
                >Depot Value</Link>
                <Link
                    to="/transactions"
                    className={linkStyle}
                >Transactions</Link>
                <Link
                    to="/stock"
                    className={linkStyle}
                >Stock</Link>
            </div>
        </div>
    )
}