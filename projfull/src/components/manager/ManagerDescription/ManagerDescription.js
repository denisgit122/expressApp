import css from "../../manager/AllUser/AllUser.module.css";

const ManagerDescription = ({manager}) => {
    const {email, name,statusVip,gender } = manager;

    return (
        <div>
            <div className={css.desc}>

                <div className={css.span}>email: {email}</div>
                <div className={css.span}>name: {name}</div>
                <div className={css.span}>gender: {gender}</div>
                <div className={css.span}>statusVip : {statusVip}</div>
                {/*<div className={css.span}>last_login: {last_login}</div>*/}

            </div>
        </div>
    );
};

export {ManagerDescription};