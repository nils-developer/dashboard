import {Button} from "../../components/Button";
import {Link} from "react-router-dom";

type Props = {
    uri: string,
    text: string
}

export const AddItemButton = ({uri, text}: Props) => {

    return (
            <Link
                to={uri}
                className="bg-gray-200 border rounded-xl text-white font-medium my-auto shadow-md mx-2"
            >
                <Button type="button" text={text}/>
            </Link>
    )
}