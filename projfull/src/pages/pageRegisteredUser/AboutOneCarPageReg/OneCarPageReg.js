import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {carAction} from "../../../redux";
import {AboutOneCars} from "../../../components/componentsAuth";

const OneCarPageReg = () => {
    const {carId} = useParams();
    const dispatch = useDispatch();

    const [viewsDay, setViewsDay] = useState();

    useEffect( () => {
        dispatch(carAction.getById(carId));

    },[carId, dispatch]);
    return (
        <div>
            <AboutOneCars carId={carId} viewsDay={viewsDay} setViewsDay={setViewsDay}/>
        </div>
    );
};

export {OneCarPageReg};