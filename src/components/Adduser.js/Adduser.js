import { Fragment } from "react";
import Card from "../Card/Card";

const Adduser = () => {
    return (
        <Fragment>
            <Card>
                <form >
                    <input placeholder="User / Email"></input>
                    <input placeholder="Password"></input>
                    <button></button>
                </form>
            </Card>

        </Fragment>
    )
}
export default Adduser;