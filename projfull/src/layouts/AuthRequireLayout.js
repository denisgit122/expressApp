import {Outlet, useNavigate} from "react-router-dom";
import {AuthRequire} from "../components/componentsAuth";

const AuthRequireLayout = () => {
    const re =  localStorage.getItem('access')
    const navigate = useNavigate();

    return (
        re ? <div>
                <AuthRequire/>
                <Outlet/>
            </div>
        : <div>
                {setTimeout(()=> navigate('/login', {
                    replace: true
                }),50)}
          </div>
    );
};

export {AuthRequireLayout};