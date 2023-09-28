import React, {CSSProperties} from "react";

type Props = {
    className: string,
    specialStyle?: CSSProperties
    title: string,
    value?: Promise<any> | number | any,
    children?: React.ReactNode
}


export const DashboardItem = ({className, specialStyle, title, value, children}: Props) => {
    return (
        <div className={className} style={specialStyle}>
            <h5>{title}</h5>
            {value !== undefined ? `${value} €` : null}
            {children}
        </div>
    )
}