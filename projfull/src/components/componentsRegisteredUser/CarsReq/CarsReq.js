import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from '../CarReq/CarReq.module.css'
import {carAction} from "../../../redux";

import {ButtonSearch, Price, SelectCar, SelectCity, Year} from "../../componentsAuth/Search";
import {Loading} from "../../componentsAuth";
import {CarReq} from "../CarReq/CarReq";
import {userService} from "../../../services";


const CarsReq = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars)

    const [load, setLoad] = useState(true);
    const [car, setCar] = useState(null);

    const [onChange, setOnChange] = useState('');
    const [city, setCity] = useState('');

    const [priceMin, setPriceMin] = useState('');
    const [priceMax, setPriceMax] = useState('');

    const [yearMin, setYearMin] = useState('');
    const [yearMax, setYearMax] = useState('');

    const sort = () => {

        if (city === "AllCity" && onChange && !priceMax && !priceMin && !yearMin && !yearMax ){
            setCar([...cars].filter(value =>
                    value.model === onChange
            ));
        }
        else if (city && city !== "AllCity" && onChange && !priceMax && !priceMin && !yearMin && !yearMax ){
            setCar([...cars].filter(value =>
                value.model === onChange && value.city === city
            ));
        }
        else if (city === "AllCity" && onChange && priceMax && priceMin && yearMin>=1990 && yearMax<=new Date().getFullYear()){
            setCar([...cars].filter(value =>
                value.model === onChange
                && value.price >priceMin && value.price < priceMax
                && value.year > yearMin && value.year < yearMax
            ));
        }
        else if (city && city !== "AllCity"  && onChange && priceMax && priceMin && yearMin>=1990 && yearMax<=new Date().getFullYear()){
            setCar([...cars].filter(value =>
                value.model === onChange &&
                value.city === city
                && value.price >priceMin && value.price < priceMax
                && value.year > yearMin && value.year < yearMax

            ));
        }

    }

    const [favorite, setFavorite] = React.useState('');

    useEffect ( () => {
        setLoad(true)

        userService.getUserAccess().then(({data}) => setFavorite(data.favorite))

        dispatch(carAction.getAll());

        setTimeout(()=> setLoad(false),1000)
    }, [dispatch]);

    return (
        <div className={css.boxCar}>
            <div className={css.headBoxSelect}>

                <div className={css.select}>
                    <div>
                        <SelectCar setOnChange={setOnChange}/>

                        <SelectCity setCity={setCity}/>
                    </div>

                    <div>
                        <Price
                            setMin={setPriceMin} setMax={setPriceMax}
                            priceMin={priceMin} priceMax={priceMax}
                        />
                        <Year
                            setYearMax={setYearMax} setYearMin={setYearMin}
                            yearMin={yearMin} yearMax={yearMax}
                        />
                    </div>

                </div>
                <ButtonSearch sort={sort}/>
            </div>

            {
                load ? <div className={css.loading}><Loading/></div>
                    :
                    <div className={css.boxWithCar}>
                        {car ?
                            car.map(car => <CarReq key={car._id}
                             setFavorite={setFavorite} favorite={favorite}
                              car={car}/>)
                            :cars.map(car => <CarReq key={car._id}
                              setFavorite={setFavorite} favorite={favorite}
                               car={car}/>)}
                    </div>
            }



        </div>
    );
};

export {CarsReq};