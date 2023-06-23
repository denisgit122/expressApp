import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {userAction} from "../../../redux";
import {AllUser} from "../AllUser/AllUser";
import css from '../AllUser/AllUser.module.css'

const AllUsers = () => {
    const dispatch = useDispatch();
    const {users} = useSelector(state => state.users)

    useEffect(() => {
        dispatch(userAction.getAll())
    },[dispatch])
    console.log(users)
return (
  <div className={css.allUserBox}>
      { users && users.map(user=> <AllUser key={user._id} user={user}/>)}
  </div>
);
};

export {AllUsers};