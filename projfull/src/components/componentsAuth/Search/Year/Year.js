import css from "../Price/Price.module.css";
import {BsArrowDownShort, BsArrowUpShort} from "react-icons/bs";
import {useState} from "react";

const Year = ({setYearMax, yearMin, yearMax, setYearMin}) => {

    const [status, setStatus] = useState(false);

    const select = () => {
        status ? setStatus(false) : setStatus(true)
    }
return (
  <div>
      <div >
          <div className={css.boxSelect} onClick={event => select()}>
              <div>
                  {yearMin && yearMax
                      ?
                      <div className={css.year}>
                          <div>Year {yearMin} - {yearMax}</div>

                          <div>
                          {status ?<BsArrowUpShort className={css.iconUp}/> : <BsArrowDownShort className={css.icon2}/>}
                        </div>

                      </div>
                      : "Year"
                  }

                  {
                      status ?
                          <div className={css.boxSelectTrue} onClick={e => e.stopPropagation()} >
                              <input className={css.input} placeholder={'from'} type="number"
                                     onChange={event => setYearMin(event.target.value)}
                              />
                              <input className={css.input} placeholder={'to'} type="number"
                                     onChange={event => setYearMax(event.target.value)}
                              />
                          </div>
                          :
                          <div>
                          </div>
                  }
              </div>


          </div>
      </div>
  </div>
);
};

export {Year};