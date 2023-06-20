import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../../redux";
import {AboutOneCars} from "../../../components/componentsAuth";

const OneCarPage = () => {
    const {carId} = useParams();
    const dispatch = useDispatch();
    // const {car} = useSelector(state => state.cars);

    useEffect( () => {
        dispatch(carAction.getById(carId));
    },[dispatch]);

    return (
        <div>
            <AboutOneCars/>
        </div>
    );
};

export {OneCarPage};