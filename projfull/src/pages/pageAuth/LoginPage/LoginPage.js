import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Login.module.css'
import {authService} from "../../../services";
import {loginValidator} from "../../../validators";
import {useDispatch, useSelector} from "react-redux";
import {authAction} from "../../../redux/slices/authSlices";
import {userAction} from "../../../redux";

const LoginPage = () => {
    const {handleSubmit, register, formState:{isValid, errors}} = useForm(
        {mode:"onTouched", resolver: joiResolver(loginValidator)}
    );
    const dispatch = useDispatch();
    const {error} = useSelector(state => state.auth)
    const {userByEmail} = useSelector(state => state.users)

    const access= authService.getAccessToken();
    const [data, setData] = useState();
    const [err, setErr] = useState('');

    const navigate = useNavigate();

    const login = async (userCredential) => {
        try {
           setData(userCredential)
        }catch (error) {}
    }
    useEffect(() => {
        dispatch(authAction.login(data))

        if (data){
            dispatch(userAction.getByEmail(data.email))
        }

        if (access){
            if (userByEmail.status === 'user'){
                navigate("/car")
            } if (userByEmail.status === 'manager'){
                navigate("/allCar")
            }

        }
        setErr(error)

    }, [dispatch, data, access])

    return (
        <div className={css.box}>
            <div className={css.loginBox}>
                <h2>Login Form</h2>

                {error && <h3>{JSON.stringify(error.message)}</h3>}

                <form onSubmit={handleSubmit(login)}>
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

export {LoginPage};