import css from './ButtonAdmin.module.css'
import React, {useState} from "react";
import {ModalUpdateUser} from "../ModalUpdateUser/ModalUpdateUser";

const  ButtonAdmin = ({word, user}) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <div onClick={() => setModalActive(true)}>
                <button className={css.buttonAd}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> {word}
                </button>
            </div>

            <ModalUpdateUser user={user} active={modalActive} setModalActive={setModalActive}/>
        </div>
    );
};

export {ButtonAdmin};