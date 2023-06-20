import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import Headroom from 'react-headroom'

const HeaderAuth = () => {
    return (
        <Headroom className={css.headroom}>
            <header className={css.header}>
                <NavLink to={"/cars"}>Cars</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/register"}>Register</NavLink>
            </header>
        </Headroom>

    );
};

export {HeaderAuth};