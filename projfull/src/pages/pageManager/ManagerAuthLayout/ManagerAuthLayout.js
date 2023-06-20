import {Outlet, useNavigate} from "react-router-dom";
import {AuthManager} from "../../../components/manager";

const ManagerAuthLayout = () => {
    const re =  localStorage.getItem('access')
    const navigate = useNavigate();

    return (
        re ? <div>
                <AuthManager/>
                <Outlet/>
            </div>
            : <div>
                {setTimeout(()=> navigate('/login', {
                    replace: true
                }),50)}
            </div>
    );
};

export {
    ManagerAuthLayout
};