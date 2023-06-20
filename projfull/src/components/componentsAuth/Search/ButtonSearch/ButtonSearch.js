import css from './ButtonSearch.module.css'
const ButtonSearch = ({sort}) => {
return (
    <button  onClick={event => sort()} className={css.button}>
  <span> Search
  </span>
    </button>
);
};

export {ButtonSearch};