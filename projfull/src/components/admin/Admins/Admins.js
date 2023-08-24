import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {adminAction} from "../../../redux";
import css from "../../manager/AllUser/AllUser.module.css";
import {AllUser} from "../../manager/AllUser/AllUser";
import {Admin} from "../Admin/Admin";

const Admins = () => {

    const dispatch =useDispatch();
    const {managers} = useSelector(state => state.admins)

    useEffect(() => {
        dispatch(adminAction.getAll())
    },[dispatch]);

    return (
        <div className={css.allUserBox}>
            { managers && managers.map(manager=> <Admin key={manager._id} manager={manager}/>)}
        </div>
);
};

export {Admins};