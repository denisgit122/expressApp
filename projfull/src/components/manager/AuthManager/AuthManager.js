import Headroom from "react-headroom";
import css from "../../componentsRegisteredUser/Header/Header.module.css";
import {NavLink} from "react-router-dom";

import {MdOutlineLogout} from "react-icons/md";

const AuthManager = () => {

    return (
        <Headroom className={css.headroom}>
            <header className={css.header}>

                <NavLink to={"/allCar"}>Cars</NavLink>

                <NavLink to={"/updateCarAll"}>Update car</NavLink>

                <a href="" onClick={()=>localStorage.removeItem("access")}>
                    <MdOutlineLogout className={css.MdOutlineLogout}/>
                </a>

            </header>
        </Headroom>


    );
};

export {AuthManager};