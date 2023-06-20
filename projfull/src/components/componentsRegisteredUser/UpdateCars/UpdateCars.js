import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../../redux";

import {Loading} from "../../componentsAuth";
import {UpdateCar} from "../UpdateCar/UpdateCar";
import css from "../MyCarsReq/MyCarsReq.module.css";

const UpdateCars = () => {

    const dispatch = useDispatch();
    const {myCars} = useSelector(state => state.cars)
    const [load, setLoad] = useState(true);

    useEffect(() => {

        setLoad(true)

        dispatch(carAction.getMyCars());

        setTimeout(()=> setLoad(false),1000)
    },[dispatch])

    return (
        <div className={css.headBoxMyCar}>
            {
                load ? <div className={css.loading}><Loading/></div>
                    : myCars.length >= 1
                        ?
                        <div className={css.boxMyCar}>
                            {myCars.map(myCar =><UpdateCar key={myCar._id}  myCars={myCar}/>)}
                        </div>
                        :
                        <div className={css.boxCar}>
                            <div className={css.card}>
                                <div className={css.cardContent}>
                                    You don't have a car
                                </div>
                            </div>
                        </div>
            }

        </div>
    );
};

export {UpdateCars};