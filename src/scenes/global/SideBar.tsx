import {Link} from "react-router-dom";

const linkStyle: string = "grow pl-5 py-3 ease-in-out duration-300 hover:pl-8 hover:bg-emerald-300 hover:font-medium"

export const SideBar = () => {
    return (
        <div className="
            flex flex-col
            w-52 my-3 mx-3
            text-white
            shadow-lg shadow-gray-300
            border-r border-emerald-600 rounded-xl
            bg-emerald-500
        ">
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