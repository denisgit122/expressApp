import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {carAction} from "../../../redux";

import css from './MyCarsReq.module.css'
import {MyCarReq} from "../ MyCarReq/MyCarReq";
import {Loading} from "../../componentsAuth";
import {useNavigate} from "react-router-dom";

const MyCarsReq = () => {

    const dispatch = useDispatch();
    const {myCars} = useSelector(state => state.cars);
    const [load, setLoad] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {

        setLoad(true);

        dispatch(carAction.getMyCars());

        setTimeout(()=> setLoad(false),1000);
    },[dispatch]);

return (
  <div className={css.headBoxMyCar}>
      {
          load ? <div className={css.loading}><Loading/></div>
              : myCars.length >= 1
              ?
                  <div className={css.boxMyCar}>
                      {myCars.map(myCar =><MyCarReq key={myCar._id}  myCars={myCar}/>)}
                  </div>
              :
                  <div className={css.boxCar}>
                      <div onClick={()=>navigate("/createCar")} className={css.card}>
                          <div className={css.cardContent}>
                              You don't have a car
                          </div>
                      </div>
                  </div>

      }
  </div>
);
};

export {MyCarsReq};