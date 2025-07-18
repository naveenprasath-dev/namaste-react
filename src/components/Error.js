import { useRouteError } from "react-router";

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
                This is Error Page. {err.statusText + " "  + err.status}
            </h1>
        </div>
    )
}

export default Error;