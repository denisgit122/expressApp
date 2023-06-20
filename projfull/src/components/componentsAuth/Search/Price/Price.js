import {useState} from "react";
import {BsArrowDownShort, BsArrowUpShort} from 'react-icons/bs'

import css from './Price.module.css'

const Price = ({setMin, setMax, priceMax, priceMin}) => {
    const [status, setStatus] = useState(false);

    const select = () => {
        status ? setStatus(false) : setStatus(true)
    }

return (
    <div >
        <div className={css.boxSelect} onClick={event => select()}>
            <div>
                {priceMin && priceMax
                    ?
                    <div className={css.year}>

                        <div>Price {priceMin}$ - {priceMax}$</div>
                        <div>
                            {status ?<BsArrowUpShort className={css.iconUp2}/> : <BsArrowDownShort className={css.icon}/>}
                        </div>

                    </div>
                    : "Prise-$"
                }

                {
                    status ?
                        <div className={css.boxSelectTrue} onClick={e => e.stopPropagation()} >
                            <input className={css.input} placeholder={'from'} type="number"
                                   onChange={event => setMin(event.target.value)}
                            />
                            <input className={css.input} placeholder={'to'} type="number"
                                   onChange={event => setMax(event.target.value)}
                            />
                        </div>
                        :
                        <div>
                        </div>
                }
            </div>


        </div>
    </div>

);
};

export {Price};