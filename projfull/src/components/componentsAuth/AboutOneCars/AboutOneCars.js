import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AiOutlineSearch, AiOutlineArrowRight, AiOutlineCheck} from 'react-icons/ai'
import {TbPointFilled} from 'react-icons/tb'
import {ImCross} from 'react-icons/im'
import {BiMap} from 'react-icons/bi'
import {FaRegIdCard} from 'react-icons/fa'

import img from '../../../img/download-removebg-preview (2).png'
import css from './AboutOneCars.module.css'
import {carAction, userAction} from "../../../redux";
import {Loading} from "../Loading/Loading";
import {Slice} from "../Slice/Slice";
import {Exchanger} from "../Exchanger/Exchanger";
import img2 from '../../../img/img.png'

const AboutOneCars = () => {
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.users);
    const {car, cars} = useSelector(state => state.cars);
    const [carArr, setCarArr] = useState(1);

    const navigate = useNavigate();

    const [loadStatus, setLoadStatus] = useState(true);
    const [status, setStatus] = useState(false);
    const [email, setEmail] = useState(true);
    const [chat, setChat] = useState(false);

    const {accident, carNumber, city, color, description,
        engine, mark, mileage, model, numberOfOwners, photo, power, price, transmission, year,} = car;

    useEffect(() => {

        setLoadStatus(true);

        dispatch(carAction.getAll());

        const {user: userId} = car
        if (userId){
            dispatch(userAction.getById(userId));
        }else {
            return;
        }

        setTimeout(() => setLoadStatus(false), 1000)
    }, [dispatch, car])



    let strings = '';
    let creatCar = '';
    let creatCarDay = '';
    let Email = '';
    let hashedEmail = [];
    let star = [];

    if (!Array.isArray(user)){
         strings = user.createdAt.split('-').slice(0,2);

         hashedEmail.push(user.email.length);
         Email = user.email.split('').slice(0,3);

        creatCar = car.createdAt.split('-').slice(0,3);
        const arr = creatCar.splice(2,1);
        creatCarDay = arr[0].split('').splice(0,2)
    }
    for (let i = 1; i <= hashedEmail-3; i++) {
        star.push("X")
    }

    const nextCar = cars.filter(val =>val.model === model)

    const x = async () => {
        if (nextCar[0]){

            if (!!nextCar[carArr]){

                setCarArr(prevState => (prevState +1));
                dispatch(carAction.getById(nextCar[carArr]._id));
                
            }else if (!nextCar[carArr]){
                setCarArr(0)
            }
        }

    }


    return (
        <div className={css.headBox}>

            <div className={css.boxRetSearch}>

                <div onClick={() => navigate(-1)} className={css.retSearch}>
                    <AiOutlineSearch/>
                    return to search
                 </div>

                <div onClick={() => x()} className={css.retSearch}>
                    next car
                    <AiOutlineArrowRight/>
                 </div>
            </div>
            { nextCar ?
                loadStatus ? <Loading/>
                        :
                        <div className={css.desc}>
                            <div>
                                <h2 className={css.mark}>{mark} {model} {year}</h2>
                                <div className={css.engine}>
                                    <TbPointFilled className={css.TbPointFilled}/>{engine }({power})
                                    <TbPointFilled className={css.TbPointFilled}/> Transition: {transmission}</div>
                            </div>
                            <div className={css.boxPhotoPrice}>

                                <div className={css.headBoxPrice}>

                                    <div className={css.user}>
                                        <div className={css.boxPrice}>
                                            <h2 className={css.price}>{price}$</h2>
                                            <div>
                                                <Exchanger/>
                                            </div>
                                        </div>
                                        <div>{mileage}km mileage in the car</div>

                                        <div className={css.headBoxUser}>

                                            <div className={css.seller}>
                                                <div className={css.allSeller}>
                                                    <img className={css.img} src={img} alt=""/>

                                                    <div>
                                                        <h4>Seller</h4>
                                                        <h3 className={css.sellerName}>The name is <b>{user.name}</b> </h3>
                                                    </div>

                                                    <div>

                                                    </div>
                                                </div>
                                                <hr/>
                                                <div className={css.boxCityName}>

                                                    <div><BiMap/>{city}</div>
                                                    <div><FaRegIdCard className={css.FaRegIdCard}/>registered in {strings[0]}-{strings[1]}</div>

                                                    <div className={css.boxEmail}>

                                                        <h3 className={css.contact}>Contact:</h3>

                                                        {email ?
                                                            <div className={css.boxInactiveEmail}>
                                                                <h4 className={css.email}>{Email}{star.map(value => value)}</h4>

                                                                <cite onClick={() => email && setEmail(false)}>
                                                                    see mail
                                                                </cite>
                                                            </div>
                                                            :
                                                            <div className={css.activeEmail}>
                                                                <li>
                                                                    <a className={css.href} href={`mailto: ${user.email}`}>{user.email}</a>
                                                                </li>
                                                            </div>
                                                        }

                                                        <div className={css.boxNumber}>
                                                            <li>
                                                                <div    className={css.number}>
                                                                    phone number <cite>(the function is currently inactive)</cite>
                                                                </div>
                                                            </li>
                                                        </div>

                                                        <div className={css.boxButton}>
                                                            <button
                                                                onClick={() => chat? setChat(false) : setChat(true)}
                                                                className={css.btn}>

                                                                <span className={css.btnTextOne}>write in the chat</span>
                                                                <span className={css.btnTextTwo}>Great!</span>
                                                            </button>
                                                        </div>
                                                        {
                                                            chat ?
                                                                <div onClick={()=>setChat(false)} className={css.boxMessageChat}>
                                                                    <div className={css.boxMessage}>

                                                                        <div className={css.boxWithLoader}>
                                                                            <div className={css.loader}></div>
                                                                            <h3>sorry but the chats are still under development</h3>
                                                                        </div>
                                                                    </div>

                                                                </div>

                                                                :
                                                                <></>
                                                        }

                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </div>
                                    <div className={css.headBoxComment}>
                                        <img className={css.img2} src={img2} alt=""/>
                                        <div className={css.boxCommentCar}>
                                            <h4 className={css.messageComment}>There are no customer comments about this car yet</h4>

                                            <div className={css.boxLeaveComment}>
                                                <div><img className={css.simplePhoto} src={img} alt=""/></div>
                                                <div>
                                                    <h4 className={css.inf}>
                                                        Do you know more about this car?</h4>
                                                    <p>
                                                        Write to the manager and we will check if everything is fair
                                                    </p>

                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <h2 className={css.addInf}>Additional information from the owner about the car:</h2>
                                    <div className={css.boxDescriptionOneCar}>
                                        <p>{description}</p>
                                    </div>

                                </div>

                                <div className={status? css.lightBox :css.boxPhoto}>

                                    <Slice status={status} setStatus={setStatus} photos={photo}/>
                                    {status && <div><ImCross className={css.cross} onClick={()=>setStatus(false)}/></div> }

                                    <h2 className={css.Description}>Description:</h2>

                                    <div className={css.headBoxAboutCar}>

                                        <div className={css.boxAboutCar}>
                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>  Mark, model, year</h5>
                                                </div>

                                                <h5>{mark} {model} {year}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5> Motor </h5>
                                                </div>

                                                <h5>{engine}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>Transmission</h5>
                                                </div>

                                                <h5>{transmission}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>Color</h5>
                                                </div>

                                                <h5>{color}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>Owners</h5>
                                                </div>

                                                <h5>{numberOfOwners}</h5>

                                            </div>
                                            <hr/>


                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>carNumber</h5>
                                                </div>

                                                <h5>{carNumber}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>accident</h5>
                                                </div>

                                                <h5>{accident}</h5>

                                            </div>
                                            <hr/>

                                            <div className={css.boxMarkModelYear}>

                                                <div style={{display: "flex"}}>
                                                    <AiOutlineCheck className={css.AiOutlineCheck}/>
                                                    <h5>Сreating an ad</h5>
                                                </div>

                                                <h5>{creatCar[0]}-{creatCar[1]}-{creatCarDay[0]}{creatCarDay[1]}</h5>

                                            </div>
                                            <hr/>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>

                :<>lox</>

            }

</div>
    );
};

export {AboutOneCars};