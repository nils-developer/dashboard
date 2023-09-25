import {Link} from "react-router-dom";


const linkStyle: string = "justify-center text-center w-32 py-3 ease-in-out duration-300 hover:bg-emerald-300 hover:font-medium text-white"

export const TopBar = () => {
    return (
        <nav className="
            flex justify-end
            my-3 mx-3 right-0 px-5
            shadow-lg shadow-gray-300
            border rounded-full border-emerald-600
            bg-emerald-500
        ">
            <Link
                to="/settings"
                className={linkStyle}
            >
                <span>Settings</span>
            </Link>
            <Link
                to="/profile"
                className={linkStyle}
            >
                <span>Profile</span>
            </Link>
        </nav>
    )
}