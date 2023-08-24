import Headroom from "react-headroom";
import css from "../../componentsRegisteredUser/Header/Header.module.css";
import {NavLink} from "react-router-dom";

import {MdOutlineLogout} from "react-icons/md";

const AuthAdmin = () => {
    const logOut = () => {
        localStorage.removeItem("access");

        localStorage.removeItem("refresh")
    }
    return (
        <Headroom className={css.headroom}>
            <header className={css.header}>

                <NavLink to={"/allAdmins"}>Admin</NavLink>
                <NavLink to={"/createAdmin"}>Create admin</NavLink>

                <a href="" onClick={()=>logOut()}>
                    <MdOutlineLogout className={css.MdOutlineLogout}/>
                </a>

            </header>
        </Headroom>


    );
};

export {AuthAdmin};