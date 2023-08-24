import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import './ModalUpdate.css'
import {updateUserValidator} from "../../../validators";
import css from "../../../pages/pageAuth/LoginPage/Login.module.css";
import cs from "../../../pages/pageAuth/RegisterPage/RegisterPage.module.css";
import {userAction} from "../../../redux";

const ModalUpdateUser = ({active,setModalActive, user}) => {

    const {reset, register, handleSubmit, setValue, formState:{errors, isValid}} = useForm(
        {mode:"all", resolver: joiResolver(updateUserValidator)}
    )
    const [err, setErr] = useState('');

    const {errorUpdate} = useSelector(state => state.users);
    const dispatch = useDispatch();

    const update = (data) =>{
        if (err === ''){

            dispatch(userAction.updateUser({user: data, id:user._id }))

            setTimeout(()=>{
                setModalActive(false)
                reset()
            }, 100)

        }else {
            setErr(errorUpdate)
        }
    }

    useEffect(() => {
        if (user){
            setValue("email", user.email, {shouldValidate: true})
            setValue("gender", user.gender, {shouldValidate: true})
            setValue("name", user.name, {shouldValidate: true})
            setValue("statusVip", user.statusVip, {shouldValidate: true} )
           }

    },[user])

    const output = () => {
        setModalActive(false)
        reset()
    }

    return (
        <div className={active ? "modal active" : "modal"} onClick={() => output()}>
            <div className="modalContent" onClick={e => e.stopPropagation()}>
                {errorUpdate && <h3 className={cs.error}>{JSON.stringify(errorUpdate.message)}</h3>}

                <form className={'form'} onSubmit={handleSubmit(update)}>
                    <div className={css.userBox}>
                        <input type="text" {...register("email")}/>

                        {err ?
                            <label>Invalid email </label>
                            : errors.email ? <span>{errors.email.message}</span> : <label>email</label>
                        }
                    </div>
                    <div className={css.userBox}>
                        <input type="text" {...register("name")}/>

                        {err ?
                            <label>Invalid name </label>
                            : errors.name ? <span>{errors.name.message}</span> : <label>name</label>
                        }
                    </div>

                    <div className={cs.userBox}>
                        <select name="" id="" {...register("gender")}>
                            <option>gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>

                    </div>
                    <div className={cs.userBox}>
                        <select {...register("statusVip")}>
                            <option>status Vip</option>
                            <option value="true">true</option>
                            <option value="false">false</option>
                        </select>

                    </div>
                    {isValid ? <button
                            className={css.a}>Update</button> :
                        <button className={css.button}>
                            <p>is not valid!</p>
                        </button>}


                </form>
            </div>
        </div>

    );
};

export {
    ModalUpdateUser
};