import {Button} from "./Button";
import {Link} from "react-router-dom";

type Props = {
    uri: string,
    text: string
}

export const AddItemButton = ({uri, text}: Props) => {

    return (
            <Link
                to={uri}
                className="rounded-xl text-white font-medium my-auto mx-2"
            >
                <Button type="button" text={text}/>
            </Link>
    )
}