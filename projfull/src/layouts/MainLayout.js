import {Outlet} from "react-router-dom";
import {HeaderAuth} from "../components/componentsAuth";

const MainLayout = () => {
    return (
        <div>
            <HeaderAuth/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};