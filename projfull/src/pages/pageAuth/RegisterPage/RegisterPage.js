import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";

import {authAction} from "../../../redux/slices/authSlices";
import {registerValidator} from "../../../validators";
import css from "../LoginPage/Login.module.css";
import cs from './RegisterPage.module.css'
import {authService} from "../../../services";

const RegisterPage = () => {
    const {register,handleSubmit, formState:{errors, isValid}} = useForm(
        {mode:"onTouched", resolver: joiResolver(registerValidator)}
    )
    const navigate = useNavigate();

    const access= authService.getAccessToken();
    const [err, setErr] = useState('');

    const [data, setData] = useState();
    const dispatch = useDispatch();
    const {errorRegist} = useSelector(state => state.auth)

    const registerUser = async (data) => {
        try {
            setData(data)
        }catch (e) {}
    }

    useEffect(() => {

        dispatch(authAction.register(data))

        if (access){
            navigate("/login", {replace:true})
        }
        setErr(errorRegist)

    }, [dispatch, data, access, navigate]);

    return (
        <div className={cs.box}>
            <div className={cs.registerBox}>
                <h2>Register Form</h2>

                {errorRegist && <h3 className={cs.error}>{JSON.stringify(errorRegist.message)}</h3>}

                <form onSubmit={handleSubmit(registerUser)}>

                    <div className={css.userBox}>
                        <input type="text" {...register("email")}/>

                        {err ?
                            <label>Invalid email </label>
                            : errors.email ? <span>{errors.email.message}</span> : <label>email</label>
                        }
                    </div>
                    <div className={css.userBox}>
                        <input type="text" {...register("password")}/>

                        {err ?
                            <label>Invalid password </label>
                            : errors.password ? <span>{errors.password.message}</span> : <label>password</label>
                        }
                    </div>
                    <div className={css.userBox}>
                        <input type="text" {...register("name")}/>

                        {err ?
                            <label>Invalid name </label>
                            : errors.name ? <span>{errors.name.message}</span> : <label>name</label>
                        }
                    </div>

                    <div className={css.userBox}>

                        <input type="text" {...register("statusVip")} value={'false'}/>
                        {err
                            ? <label>Invalid statusVip </label>
                            : errors.statusVip ? <span>{errors.statusVip.message}</span> : <label>statusVip</label>
                        }
                    </div>

                    <div className={css.userBox}>

                        <input type="text" {...register("status")} value={'user'}/>
                        {err ?
                            <label>Invalid status </label>
                            :
                            errors.status ? <span>{errors.status.message}</span> : <label>status</label>
                        }
                    </div>

                    <div className={cs.userBox}>
                        <select name="" id="" {...register("gender")}>
                            <option>gender</option>
                            <option value="male">male</option>
                            <option value="female">female</option>
                        </select>

                    </div>

                    {isValid ? <button
                            className={css.a}>Login</button> :
                        <button className={css.button}>
                            <p>is not valid!</p>
                        </button>}

                </form>

            </div>
        </div>
    );
};

export {RegisterPage};