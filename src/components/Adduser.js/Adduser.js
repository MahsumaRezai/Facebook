import { Fragment } from "react";
import Card from "../Card/Card";
import classes from './Adduser.module.css'
import Button from "../Button/Button";
import Head from '../Head/Head'
import Footer from "../Footer/Footer";

const Adduser = () => {
    return (
        <Fragment>
            <Card>
            <Head/>

                <form className={classes.form} >
                
                    <label className={classes.label}>UserName or Email</label>
                    <input className={classes.input}></input>
                    <label className={classes.label}>Password</label>
                    <input className={classes.input}></input>
                    <Button>Login</Button>
                </form>
                <Footer/>
            </Card>

        </Fragment>
    )
}
export default Adduser;