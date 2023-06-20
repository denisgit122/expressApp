import { AiTwotoneHeart } from 'react-icons/ai';
import {FaMapMarked} from 'react-icons/fa';
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import css from './CarReq.module.css'
import {userService} from "../../../services";

const CarReq = ({car, setFavorite, favorite}) => {

    const {_id, mark, model, year, photo, price, power, city} = car
    const photo1 = {...photo};

    const [favCss, setFavCss] = useState(false)

    const x = async () => {

        if (favorite) {
            const fav = favorite.filter(val => val._id === car._id)

            if (fav.length) {
                setFavCss(false)
                const del = (favorite.filter(req => req._id !== car._id));
                setFavorite([...del])
                await userService.updateFavor([...del])
            } else if (!fav.length) {

                setFavCss(true)

                await setFavorite([...favorite, car])

                await userService.updateFavor([...favorite,car])
            }

        } else {
            setFavCss(true)
            await setFavorite([car])
           await userService.updateFavor([car])
        }
    }
   useEffect(() => {
       if (favorite){
           for (const argument of favorite) {
               if(argument._id === car._id){
                   setFavCss(true)
               }
           }
       }

   },[favCss])

    return (
        <div className={css.headBox}>
            <hr/>
            <AiTwotoneHeart onClick={() => x()} className={favCss? css.heartRed :css.heart }/>

            <Link to={_id}>

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
            </Link>

            <hr/>
        </div>
    );
};

export {CarReq};