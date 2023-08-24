import React from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './ButtonAdmin.module.css';
import {adminAction} from "../../../redux";

const  ButtonManagerUpdate = ({word, manager}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const update = () => {

        dispatch(adminAction.setManagerForUpdate(manager));
        navigate("/createAdmin");
    }
    return (
        <div>
                <button onClick={()=>update()} className={css.buttonAd}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span> {word}
                </button>
        </div>
    );
};

export {ButtonManagerUpdate};