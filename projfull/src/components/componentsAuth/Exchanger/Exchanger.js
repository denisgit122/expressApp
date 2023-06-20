import {useEffect, useState} from "react";

import css from './Exchanger.module.css'
import {exchangeRete} from "../../../services";

const Exchanger = () => {
    const [status, setStatus] = useState(false);
    const [data, setData] = useState([]);

    const getToday = () => {
        const data = new Date();
        const year = data.getFullYear()
        const month = data.getMonth()+1
        const day = data.getDate()
        return `${year}-${month}-${day}`
    }

    useEffect( () => {
        exchangeRete.getAll().then(({data})=>setData(data.data))
    },[])

return (
  <div>
      <div className={css.headBox} onClick={()=>status? setStatus(false) : setStatus(true)}>
          Exchange rete
          {status &&
              <div>
                  <div className={css.triangle && css.leftToRight}></div>
                  <div className={css.boxWithExchange}>

                      <h4 className={css.today}>Today: {getToday()}</h4>
                      <div className={css.boxEur}>
                          <h3 className={css.eur}>EUR</h3> <h3 className={css.dataEur}>{data.EUR}$</h3>
                      </div>

                  </div>
              </div>

          }

      </div>

  </div>
);
};

export {Exchanger};