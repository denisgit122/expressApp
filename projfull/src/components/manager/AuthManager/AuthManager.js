import Headroom from "react-headroom";
import css from "../../componentsRegisteredUser/Header/Header.module.css";
import {NavLink} from "react-router-dom";

import {MdOutlineLogout} from "react-icons/md";

const AuthManager = () => {
    const logOut = () => {
        localStorage.removeItem("access");

        localStorage.removeItem("refresh")
    }
    return (
        <Headroom className={css.headroom}>
            <header className={css.header}>

                <NavLink to={"/allUsers"}>Users</NavLink>

                <NavLink to={"/allCar"}>Cars</NavLink>

                <NavLink to={"/updateCarAll"}>Update car</NavLink>

                <a href="" onClick={()=>logOut()}>
                    <MdOutlineLogout className={css.MdOutlineLogout}/>
                </a>

            </header>
        </Headroom>


    );
};

export {AuthManager};