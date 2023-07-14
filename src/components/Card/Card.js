import { Fragment } from "react";
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <Fragment>
            {props.children}
            <div className={classes.card}>

            </div>

        </Fragment>
    )

}
export default Card;