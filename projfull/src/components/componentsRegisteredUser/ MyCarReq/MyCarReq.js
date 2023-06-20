import css from "../MyCarsReq/MyCarsReq.module.css";
import {FaMapMarked} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {carAction} from "../../../redux";

const MyCarReq = ({myCars}) => {
    const {_id, mark, model, year, photo, price, power, city} = myCars

    const [state, setState] = useState(false)

    const photo1 = {...photo};

    const dispatch = useDispatch();

    const deleteCar = async () => {

        setState(true);

        await dispatch(carAction.deleteCar(_id));

        setTimeout(()=> setState(false),1000);
    }
    useEffect(() => {
    }, [dispatch])

    return (

        <div className={css.headBox}>
            {
                state &&
                <div className={css.dotSpinner}>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                    <div className={css.dotSpinnerDot}></div>
                </div>
            }
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

            <hr/>
            <button onClick={()=> deleteCar()} className={css.button}><span className={css.text}>Delete</span><span className={css.icon}><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

            </path></svg></span>
            </button>
        </div>
);
};

export {MyCarReq};