import {Outlet, useNavigate} from "react-router-dom";
import {AuthAdmin} from "../../../components/admin";

const AdminAuthLayout = () => {
    const re =  localStorage.getItem('access')
    const navigate = useNavigate();

    return (
        re ? <div>
                <AuthAdmin/>
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
    AdminAuthLayout
};