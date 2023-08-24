import React from "react";
import {FaMapMarked} from "react-icons/fa";

import css from "../CarMan/Car.module.css";

const UpdateCarMana = ({car}) => {

    const {mark, model, year, photo, price, power, city} = car
    const photo1 = {...photo};


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