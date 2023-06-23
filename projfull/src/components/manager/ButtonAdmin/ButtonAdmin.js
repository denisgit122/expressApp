import css from './ButtonAdmin.module.css'

const ButtonAdmin = ({word}) => {

    return (
        <div>
            <button className={css.buttonAd}>
                <span></span>
                <span></span>
                <span></span>
                <span></span> {word}
            </button>
        </div>
    );
};

export {ButtonAdmin};