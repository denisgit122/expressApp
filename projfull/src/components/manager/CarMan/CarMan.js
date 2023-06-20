import { FaMapMarked} from 'react-icons/fa';

import css from './Car.module.css'
import {Link, useNavigate} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {carAction} from "../../../redux";

const CarMan = ({car}) => {

    const {_id, mark, model, year, photo, price, power, city} = car
    const photo1 = {...photo};

    const [state, setState] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const updateCar = async () => {

        await dispatch(carAction.setCarForUpdate(car));
        setTimeout(()=> navigate("/updateCarAll"), 1)

    }


    const deleteCar = async () => {

        setState(true);

        await dispatch(carAction.deleteCar(_id));
        navigate("/allCar")

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
            <Link to={_id}>

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
            </Link>
            <button disabled={true} onClick={()=> deleteCar()} className={css.button}><span className={css.text}>Delete</span><span className={css.icon}><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path
                d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z">

            </path></svg></span>
            </button>


            <button onClick={()=> updateCar()} className={css.a}>Update</button>



            <hr/>
        </div>
    );
};

export {CarMan};