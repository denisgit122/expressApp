import css from "./Loading.module.css";

const Loading = () => {
return (
  <div className={css.box}>
      <div className={css.loader}>
          <div className={css.loaderText}>Loading...</div>
          <div className={css.loaderBar}></div>
      </div>

  </div>
);
};

export {Loading};