import {Navigate, Route, Routes} from "react-router-dom";

import {AuthRequireLayout, MainLayout} from "./layouts";
import {
    OneCarPage,
    CarsPage,
    LoginPage,
    RegisterPage,
    CarsPageReg,
    OneCarPageReg,
    FavoriteCarPage, CreateCarPage, MyCarPage, UpdateCarPage, ManagerAuthLayout, CarsManaPage, UpdateCarManaPage
} from "./pages";
import {AuthManager} from "./components/manager";

function App() {
    return (
        <Routes>
            {/*without login*/}
            <Route path={"/"} element={<MainLayout/>}>
                <Route index element={<Navigate to={"login"}/>}/>
                <Route path={"cars"} element={<CarsPage/>}/>
                <Route path={"cars/:carId"} element={<OneCarPage/>}/>


                <Route path={"login"} element={<LoginPage/>}/>
                <Route path={"register"} element={<RegisterPage/>}/>
            </Route>


            <Route element={<AuthRequireLayout/>}>

                <Route path={"/car"} element={<CarsPageReg/>}/>
                <Route path={"car/:carId"} element={<OneCarPageReg/>}/>
                <Route path={"/favoriteCar"} element={<FavoriteCarPage/>}/>
                <Route path={"favoriteCar/:carId"} element={<OneCarPageReg/>}/>
                <Route path={"/myCars"} element={<MyCarPage/>}/>
                <Route path={"/createCar"} element={<CreateCarPage/>}/>
                <Route path={"/updateCar"} element={<UpdateCarPage/>}/>

            </Route>

            <Route element={<ManagerAuthLayout/>}>

                <Route path={"/allCar"} element={<CarsManaPage/>}/>
                <Route path={"allCar/:carId"} element={<OneCarPage/>}/>
                <Route path={"/updateCarAll"} element={<UpdateCarManaPage/>}/>

            </Route>
        </Routes>
    );
}

export default App;
