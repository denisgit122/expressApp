import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {adminValidator} from "../../../validators";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

import {adminAction} from "../../../redux";
import css from "../../componentsRegisteredUser/CreateCarReq/CreateCarReq.module.css";
import cs from "../../../pages/pageAuth/RegisterPage/RegisterPage.module.css";

const CreateAdmin = () => {

    const {handleSubmit, register, reset, setValue,formState:{isValid, errors}}   = useForm(
        {mode:"all", resolver: joiResolver(adminValidator)}
    );

    const dispatch = useDispatch();
    const {errorCreateMan, managerFotUpdate} = useSelector(state => state.admins)

    const [err, setErr] = useState('');

    const navigate = useNavigate();

    const create = async (data) => {
        try {
            await dispatch(adminAction.createAdmin(data));

            await navigate("/allAdmins");

        }catch (e) {

        }
    };

    useEffect(() => {

        setErr(errorCreateMan);

    },[dispatch, managerFotUpdate]);

    return (
        <div className={css.headBoxCreateMan}>

            <div className={css.loginBoxMan}>
                {errorCreateMan ?
                    <h3 className={cs.error}>{JSON.stringify(errorCreateMan.message)}</h3>
                    :managerFotUpdate ?
                        <h2 className={css.createCar}>Update admin:</h2>
                        :   <h2 className={css.createCar}>Create admin:</h2>
                }

                <form onSubmit={handleSubmit(create)}>

                    <div className={css.userBox}>
                        <input type="text" {...register("email") }/>
                        {err ?
                            <label>Invalid price </label>
                            : errors.email ? <span>{errors.email.message}</span> : <label>email</label>
                        }
                    </div>

                    <div className={css.userBox}>
                        <input type="text" {...register("name")}/>
                        {err ?
                            <label>Invalid year </label>
                            : errors.name ? <span>{errors.name.message}</span> : <label>name</label>
                        }
                    </div>

                    <div className={css.userBox}>
                        <input type="text" {...register("password")}/>
                        {err ?
                            <label>Invalid power </label>
                            : errors.password ? <span>{errors.password.message}</span> : <label>password</label>
                        }
                    </div>

                    <div className={css.userBox}>
                        <div className={css.userBox}>
                            <select  name="status" {...register("status")}>
                                <option value={''}>Status</option>
                                <option value="manager">Manager</option>
                            </select>
                        </div>
                    </div>

                    {isValid ?
                        <button className={css.a}>{"Create"}</button>
                        :
                        <button className={css.button}>
                            <p>is not valid!</p>
                        </button>}

                </form>

            </div>

        </div>
);
};

export {CreateAdmin};