

export const TopBar = () => {
    return (
        <nav className="flex justify-end right-0 border-b px-5">
            <div className="flex">
                <span className="
                flex justify-center ease-in-out duration-300 hover:bg-slate-100 hover:font-medium"
                >
                    <a className="py-5 w-32 text-center" href="/#">Settings</a>
                </span>
                <span className=
                          "flex justify-center ease-in-out duration-300 hover:bg-slate-100 hover:font-medium"
                >
                    <a className="py-5 w-32 text-center" href="/#">Profile</a>
                </span>
            </div>
        </nav>
    )
}