import React from "react";
import {Sidebar, Menu, MenuItem, SubMenu} from "react-pro-sidebar";
import {Header} from "../../components/Header";

type Props = {
    children: React.ReactNode
}

export const NavBar = ({children}: Props) => {
    return (
        <Sidebar className="h-screen">
            <Header
                className="flex justify-center text-3xl mt-5 mb-8"
                title={"Navigation"}
            />
            <Menu>
                <MenuItem>
                    <div
                        className="ease-in-out duration-300 hover:ml-3"
                    >
                        Dashboard
                    </div>
                </MenuItem>
                <SubMenu
                    label="Charts"
                >
                    <MenuItem>
                        <div
                            className="ease-in-out duration-300 hover:ml-3"
                        >
                            LineChart
                        </div>
                    </MenuItem>
                </SubMenu>
            </Menu>
        </Sidebar>
    )
}