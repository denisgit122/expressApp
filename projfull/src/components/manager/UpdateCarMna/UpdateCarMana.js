import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {FaMapMarked} from "react-icons/fa";

import css from "../CarMan/Car.module.css";
import {carAction} from "../../../redux";

const UpdateCarMana = ({car}) => {

    const {_id, mark, model, year, photo, price, power, city} = car
    const photo1 = {...photo};

    const dispatch = useDispatch();


    return (
        <div className={css.headBox}>

            <hr/>

                <div className={css.aboutCar}>
                    {photo1[0] ?
                        <img className={css.photoCar} src={photo1[0]} alt=""/>
                        :
                        <img src="" alt="photo"/>}
                </div>
                <div className={css.desc}>
                    <h3 className={css.mark}>{mark}</h3>
                    <h4 className={css.model}>{model}</h4>
                    <div className={css.model}>({power})CV</div>
                    <div className={css.city}><FaMapMarked className={css.FaMapMarked}/>{city}</div>
                </div>
                <div className={css.year}>
                    <div>{year}</div>
                    <div className={css.price}>{price}$</div>
                </div>

            <hr/>
        </div>
);
};

export {UpdateCarMana};