import React from "react";

type Props = {
    className: string
    title: string,
    value?: Promise<any> | number | any,
    children?: React.ReactNode
}
export const DashboardItem = ({className, title, value, children}: Props) => {
    return (
        <div className={className}>
            <h5>{title}</h5>
            {value !== undefined ? `${value} €` : null}
            {children}
        </div>
    )
}