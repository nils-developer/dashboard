import React, {FormEventHandler} from "react";

type Props = {
    itemType: "bank" | "investment" | "stock"
}

export const AddItem = ({itemType}: Props) => {

    const addItemByName: FormEventHandler<HTMLFormElement> = (e: React.SyntheticEvent) => {

    }

    return (
        <div>
            <form onSubmit={addItemByName}>
                <label></label>

            </form>
        </div>
    )
}