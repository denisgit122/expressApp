import React, {} from "react";
import {useDispatch} from "react-redux";
import {FaMapMarked} from "react-icons/fa";
import {useNavigate} from "react-router-dom";

import {carAction} from "../../../redux";
import css from "../MyCarsReq/MyCarsReq.module.css";

const UpdateCar = ({myCars}) => {

    const {mark, model, year, photo, price, power, city} = myCars;
    const photo1 = {...photo};
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const updateCar = async () => {

       await dispatch(carAction.setCarForUpdate(myCars));

       setTimeout(()=> navigate("/createCar"), 1)

    }
    return (
        <div className={css.headBox}>

                <hr/>
                <div className={css.aboutCar}>

                    {photo1[0] ?
                        <img className={css.photoCar} src={photo1[0]} alt=""/>
                        :
                        <div>photo</div>}
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
            <button onClick={()=> updateCar()} className={css.a}>Update</button>

            <hr/>

        </div>
    );
};

export {UpdateCar};