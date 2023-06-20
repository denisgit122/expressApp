import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from '../CarReq/CarReq.module.css'
import {carAction} from "../../../redux";

import {Loading} from "../../componentsAuth";
import {CarReq} from "../CarReq/CarReq";
import {userService} from "../../../services";


const FavoriteCarsReq = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [load, setLoad] = useState(true);

    const [favorite, setFavorite] = useState(null);

    useEffect ( () => {
        setLoad(true)

        userService.getUserAccess().then(({data}) => setFavorite(data.favorite))

        dispatch(carAction.getAll());

        setTimeout(()=> setLoad(false),1000)
    }, [dispatch]);

    return (
        <div className={css.boxCar}>
            {
                load ? <div className={css.loadingFavCar}><Loading/></div>
                    :
                    <div className={css.boxWithCar}>
                        {favorite && favorite.length>0 ?
                            favorite.map(car => <CarReq key={car._id}
                             setFavorite={setFavorite} favorite={favorite}
                              car={car}/>)
                            :
                            <div className={css.boxFavoriteCar}>
                                <div onClick={()=> navigate("/car")} className={css.card}>
                                    <div className={css.cardContent}>
                                        You don't have a favorite car
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
            }



        </div>
    );
};

export {FavoriteCarsReq};