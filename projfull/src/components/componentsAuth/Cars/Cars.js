import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {Car} from "../Car/Car";
import css from '../Car/Car.module.css'
import {carAction} from "../../../redux";
import {Loading} from "../Loading/Loading";
import {ButtonSearch, Price, SelectCar, SelectCity, Year} from "../Search";


const Cars = () => {

    const dispatch = useDispatch();
    const {cars} = useSelector(state => state.cars)

    const [load, setLoad] = useState(true)

    const [car, setCar] = useState(null)

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


    useEffect ( () => {
        setLoad(true)

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
                            car.map(car => <Car key={car._id} car={car}/>)
                            :cars.map(car => <Car key={car._id} car={car}/>)}
                    </div>
            }



        </div>
    );
};

export {Cars};