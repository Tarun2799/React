import { useRouteError} from "react-router-dom";
// useRouteError is hook given ti us by this library

const Error = ()=>{

    const err = useRouteError();
    // we can use this err (object) in our error to tell ehata is the specific ERROR.
    return (
        <div>
            <h1>OOPS</h1>
            <h2>Something went wrong</h2>
            <h3>{err.status}: {err.statusText}</h3>
        </div>
    )
}

export default Error;