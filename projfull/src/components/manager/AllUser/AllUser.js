import css from './AllUser.module.css'
import {ManagerDescription} from "../ManagerDescription/ManagerDescription";
import {ButtonAdmin} from "../ButtonAdmin/ButtonAdmin";
import React from "react";

const AllUser = ({user}) => {
const deleteUser = () => {
    console.log(12)
}
return (
    <div className={css.headBox}>

            <div className={css.box }>
                <ManagerDescription manager={user}/>
                <div className={css.lie}></div>
                <ButtonAdmin word={'Update...'}/>
                <button onClick={()=> deleteUser()} className={css.button}><span className={css.text}>Delete</span><span className={css.icon}><svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

            </path></svg></span>
                </button>
            </div>

    </div>
);
};

export {AllUser};