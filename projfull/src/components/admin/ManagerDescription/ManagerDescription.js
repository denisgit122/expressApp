import css from "../../manager/AllUser/AllUser.module.css";

const ManagerDescription = ({manager}) => {
    const {email, name, status} = manager;

    return (
        <div>
            <div className={css.desc}>

                <div className={css.span}>email: {email}</div>
                <div className={css.span}>name: {name}</div>
                <div className={css.span}>status: {status}</div>

            </div>
        </div>
    );
};

export {ManagerDescription};