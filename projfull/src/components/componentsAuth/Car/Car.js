import { FaMapMarked} from 'react-icons/fa';

import css from './Car.module.css'
import {Link} from "react-router-dom";

const Car = ({car}) => {

    const {_id, mark, model, year, photo, price, power, city} = car
    const photo1 = {...photo};

    return (
        <div className={css.headBox}>

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

            <hr/>
        </div>
    );
};

export {Car};