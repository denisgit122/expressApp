import {NavLink} from "react-router-dom";
import {useState} from "react";
import Headroom from 'react-headroom'

import {MdOutlineLogout,MdOutlineCreateNewFolder, MdAlternateEmail} from 'react-icons/md'
import {BiMenu} from 'react-icons/bi'
import {FaClipboardList} from 'react-icons/fa'
import {GrDocumentUpdate} from 'react-icons/gr'
import {AiOutlineInstagram, AiOutlineGithub} from 'react-icons/ai'

import css from '../Header/Header.module.css'
import imgLogo from '../../../img/img_1.png'

const AuthRequire = () => {

    const [menuAct, setMenuAct] = useState(false);

    const menu = () => {
      menuAct ? setMenuAct(false) : setMenuAct(true)
    }
    return (
        <Headroom className={css.headroom}>
            <header className={css.header}>

                    <NavLink onClick={()=>setMenuAct(false)} to={"/car"}>Cars</NavLink>
                    <NavLink onClick={()=>setMenuAct(false)} to={"/favoriteCar"}>Favorite</NavLink>
                
                    <div  className={css.LinkMenu} onClick={()=>menu()}>
                        <BiMenu className={css.BiMenu}/>
                    </div>
                {
                    menuAct ?
                     <div className={css.boxMenu}>

                         <img className={css.logo} src={imgLogo} alt="logo"/>

                             <div className={css.boxNav}>
                                 <div>
                                    <FaClipboardList className={css.BsFillMenuButtonWideFill}/>
                                 </div>

                                 <div>
                                     <NavLink onClick={()=>setMenuAct(false)} className={css.navLink} to={"/myCars"}>My cars</NavLink>
                                 </div>
                             </div>

                             <div className={css.boxNav}>
                                 <div>
                                     <MdOutlineCreateNewFolder className={css.BsFillMenuButtonWideFill}/>
                                 </div>

                                 <div>
                                     <NavLink onClick={()=>setMenuAct(false)} className={css.navLink} to={"/createCar"}>Create car</NavLink>
                                 </div>
                             </div>

                             <div className={css.boxNav}>
                                 <div>
                                     <GrDocumentUpdate className={css.BsFillMenuButtonWideFill}/>
                                 </div>

                                 <div>
                                     <NavLink onClick={()=>setMenuAct(false)} className={css.navLink} to={"/updateCar"}>Update car</NavLink>
                                 </div>
                             </div>
                         <hr/>

                         <div className={css.boxContact}>
                             <div><a href="https://instagram.com/den_yaholnyk?igshid=YmMyMTA2M2Y="> <AiOutlineInstagram className={css.AiOutlineInstagram}/> </a></div>
                             <div><a href="mailto: yaholnykd@gmail.com"><MdAlternateEmail className={css.AiOutlineInstagram}/></a></div>
                             <div><a href="https://github.com/denisgit122"><AiOutlineGithub className={css.AiOutlineInstagram}/></a></div>
                         </div>

                         <hr/>

                         <div className={css.boxLogOut}>
                             <div>
                                 <MdOutlineLogout className={css.MdOutlineLogout}/>
                             </div>

                             <div>

                                 <a href="" className={css.logOut}  onClick={()=>
                                     localStorage.removeItem("access")}>
                                     Sign Out
                                 </a>
                             </div>
                         </div>
                            <hr/>

                     </div>
                        :<></>
                }




            </header>
        </Headroom>


    );
};

export {AuthRequire};