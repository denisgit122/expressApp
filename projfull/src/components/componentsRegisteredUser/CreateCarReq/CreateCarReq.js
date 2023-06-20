import {useForm} from "react-hook-form";

import css from './CreateCarReq.module.css';
import {joiResolver} from "@hookform/resolvers/joi";
import {createCarValidator} from "../../../validators";
import {useEffect, useState} from "react";
import {carAction} from "../../../redux";
import {useDispatch, useSelector} from "react-redux";
import cs from "../../../pages/pageAuth/RegisterPage/RegisterPage.module.css";
import {useNavigate} from "react-router-dom";

const CreateCarReq = () => {

    const {handleSubmit, register, reset, setValue,formState:{isValid, errors}}   = useForm(
        {mode:"all", resolver: joiResolver(createCarValidator)}
    );

    const dispatch = useDispatch();
    const {errorCreateCar, CarInf} = useSelector(state => state.cars)

    const {carFotUpdate} = useSelector(state => state.cars);

    const [err, setErr] = useState('');
    const [carId, setCarId] = useState('');

    const navigate = useNavigate();

    const create = async (data) => {
        try {
           await dispatch(carAction.createCar(data));

               await navigate("/car");

        }catch (e) {

        }
    };

    const update = async (data) => {
       await dispatch(carAction.updateCar({id: carFotUpdate._id, car: data}));
       await dispatch(carAction.setCarForUpdate(null));
       await navigate("/car");
       reset();
    };

    useEffect(() => {
        if (carFotUpdate){
            setValue("price", +carFotUpdate.price, {shouldValidate: true})
            setValue("accident", carFotUpdate.accident, {shouldValidate: true})
            setValue("carNumber", carFotUpdate.carNumber, {shouldValidate: true})
            setValue("city", carFotUpdate.city, {shouldValidate: true})
            setValue("description", carFotUpdate.description, {shouldValidate: true} )
            setValue("engine", carFotUpdate.engine, {shouldValidate: true} )
            setValue("mark", carFotUpdate.mark, {shouldValidate: true})
            setValue("mileage", (+carFotUpdate.mileage), {shouldValidate: true} )
            setValue("model", carFotUpdate.model, {shouldValidate: true})
            setValue("numberOfOwners", carFotUpdate.numberOfOwners, {shouldValidate: true} )
            setValue("power", carFotUpdate.power, {shouldValidate: true} )
            setValue("transmission", carFotUpdate.transmission, {shouldValidate: true})
            setValue("year", (+carFotUpdate.year), {shouldValidate: true})
            setValue("color", carFotUpdate.color, {shouldValidate: true})
        }


        setErr(errorCreateCar);

        setCarId(CarInf._id);


    },[dispatch, carFotUpdate]);


    // const crea = () => {
    //     let files = [];
    //    const arr = document.querySelector('input[type="file"]').files;
    //     for (const file of arr) {
    //         files.push(file.name
    //         )
    //     }
    //
    //     let fd = new FormData();
    //     files.forEach((file, i)=> {
    //         fd.append('file'+ i, file);
    //     })
    //     carService.uploadPhoto(fd).then(({data})=> console.log(data))
    // }


    return (
        <div className={css.headBoxCreateCar}>

                <div className={css.loginBox}>
                    {errorCreateCar ?
                        <h3 className={cs.error}>{JSON.stringify(errorCreateCar.message)}</h3>
                        :carFotUpdate ?
                            <h2 className={css.createCar}>Update Car:</h2>
                        :   <h2 className={css.createCar}>Create Car:</h2>
                    }

                        <form onSubmit={handleSubmit(carFotUpdate ? update : create)}>

                        <div className={css.userBox}>
                            <input type="number" {...register("price") }/>
                            {err ?
                                <label>Invalid price </label>
                                : errors.price ? <span>{errors.price.message}</span> : <label>price</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="number" {...register("year")}/>
                            {err ?
                                <label>Invalid year </label>
                                : errors.year ? <span>{errors.year.message}</span> : <label>year</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="number" {...register("power")}/>
                            {err ?
                                <label>Invalid power </label>
                                : errors.power ? <span>{errors.power.message}</span> : <label>power</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="text" {...register("color")}/>
                            {err ?
                                <label>Invalid color </label>
                                : errors.color ? <span>{errors.color.message}</span> : <label>color</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="number" {...register("carNumber")}/>
                            {err ?
                                <label>Invalid carNumber </label>
                                : errors.carNumber ? <span>{errors.carNumber.message}</span> : <label>carNumber</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="number" {...register("mileage")}/>
                            {err ?
                                <label>Invalid mileage </label>
                                : errors.mileage ? <span>{errors.mileage.message}</span> : <label>mileage</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="number" {...register("numberOfOwners")}/>
                            {err ?
                                <label>Invalid number Of Owners </label>
                                : errors.numberOfOwners ? <span>{errors.numberOfOwners.message}</span>
                                    : <label>number Of Owners</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="text" {...register("accident")}/>
                            {err ?
                                <label>Invalid accident </label>
                                : errors.accident ? <span>{errors.accident.message}</span> : <label>accident</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type="text" {...register("engine")}/>
                            {err ?
                                <label>Invalid engine </label>
                                : errors.engine ? <span>{errors.engine.message}</span> : <label>engine</label>
                            }
                        </div>
                        <div className={css.userBox}>
                            <input type={"text"} {...register("description")}/>
                            {err ?
                                <label>Invalid description </label>
                                : errors.description ? <span>{errors.description.message}</span> : <label>description</label>
                            }
                        </div>

                            <div className={css.userBox}>
                                <select required name="cars" {...register("model")} >
                                    <option value={''}>Model</option>
                                    <optgroup label="Volkswagen">
                                        <option value="polo">Polo</option>
                                        <option value="tiguan">tiguan</option>
                                        <option value="passat">passat</option>
                                        <option value="touareg">touareg</option>
                                        <option value="golf">golf</option>
                                    </optgroup>

                                    <optgroup label="Mercedes">
                                        <option value="eqs">EQS</option>
                                        <option value="cla">CLA</option>
                                        <option value="e-class">E-class</option>
                                    </optgroup>

                                    <optgroup label="BMV">
                                        <option value="x1">X1</option>
                                        <option value="x2">X2</option>
                                        <option value="x3">X3</option>
                                        <option value="x4">X4</option>
                                        <option value="x5">X5</option>
                                        <option value="x6">X6</option>
                                        <option value="x7">X7</option>
                                    </optgroup>

                                    <optgroup label="Toyota">
                                        <option value="camry">Camry</option>
                                        <option value="auris">Auris</option>
                                        <option value="avensis">Avensis</option>
                                        <option value="celica">Celica</option>
                                        <option value="mark">Mark</option>
                                    </optgroup>

                                    <optgroup label="Audi">
                                        <option value="rs6">RS6</option>
                                        <option value="a1">A1</option>
                                        <option value="a2">A2</option>
                                        <option value="a3">A3</option>
                                        <option value="a4">a4</option>
                                        <option value="a6">a6</option>
                                        <option value="tt">TT</option>
                                    </optgroup>

                                    <optgroup label="Renault">
                                        <option value="clio">Clio</option>
                                        <option value="captur">Captur</option>
                                        <option value="laguna">Laguna</option>
                                        <option value="megane">Megane</option>
                                    </optgroup>

                                    <optgroup label="Ford">
                                        <option value="puma">Puma</option>
                                        <option value="focus">Focus</option>
                                        <option value="kuga">Kuga</option>
                                        <option value="ecosport">Ecosport</option>
                                    </optgroup>

                                    <optgroup label="Skoda">
                                        <option value="octavia">Octavia</option>
                                        <option value="kodiaq">Kodiaq</option>
                                        <option value="kamiq">Kamiq</option>
                                        <option value="scala">Scala</option>
                                    </optgroup>
                                </select>
                            </div>

                            <div className={css.userBox}>
                                <select required name="cars" {...register("mark")} >

                                    <option value={''}>Mark</option>
                                    <option value="volkswagen">Volkswagen</option>
                                    <option value="mercedes-benz">Mercedes-benz</option>
                                    <option value="bmw">BMW</option>
                                    <option value="toyota">Toyota</option>
                                    <option value="audi">Audi</option>
                                    <option value="renault">Renault</option>
                                    <option value="ford">Ford</option>
                                    <option value="skoda">Skoda</option>

                                </select>
                            </div>

                            <div className={css.userBox}>
                                <select name="cars" id="cars" {...register("city")}>
                                    <option value={''}>City</option>
                                    <option value="Kyiv">Kyiv</option>
                                    <option value="Kharkiv">Kharkiv</option>
                                    <option value="Odesa">Odesa</option>
                                    <option value="Dnipro">Dnipro</option>
                                    <option value="Donetsk">Donetsk</option>
                                    <option value="Zaporizhzhya">Zaporizhzhya</option>
                                    <option value="Kryvyi_Rih">Kryvyi Rih</option>
                                    <option value="Mykolaiv">Mykolaiv</option>
                                    <option value="Mariupol">Mariupol</option>
                                    <option value="Luhansk">Luhansk</option>
                                    <option value="Sevastopol">Sevastopol</option>
                                    <option value="Vinnitsa">Vinnitsa</option>
                                    <option value="Simferopol">Simferopol</option>
                                    <option value="Makiivka">Makiivka</option>

                                </select>
                            </div>

                            <div className={css.userBox}>
                                <select  name="transmission" {...register("transmission")}>
                                    <option value={''}>Transmission</option>
                                    <option value="manual">Manual</option>
                                    <option value="automatic">Automatic</option>
                                </select>
                            </div>

                        {isValid ?
                            <button className={css.a}>{carFotUpdate ? "Update" : "Create"}</button>
                            :
                            <button className={css.button}>
                                <p>is not valid!</p>
                            </button>}

                    </form>

                    {/*    <input name="file" type={"file"} multiple/>*/}
                    {/*<button onClick={()=>crea()}>sd</button>*/}
                </div>

        </div>

    )
};

export {CreateCarReq};