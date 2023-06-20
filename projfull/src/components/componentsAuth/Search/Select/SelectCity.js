import css from './Select.module.css'

const SelectCity = ({setCity}) => {
return (
  <div>
      <select name="cars" id="cars" className={css.selectCar}
      onChange={event => setCity(event.target.value)}
      >
          <option>City</option>
          <option value="AllCity">AllCity</option>
           <option value="Kyiv">Kyiv</option>
          <option value="Kharkiv">Kharkiv</option>
          <option value="Odesa">Odesa</option>
          <option value="Dnipro">Dnipro</option>
          <option value="Donetsk">Donetsk</option>
          <option value="Zaporizhzhya">Zaporizhzhya</option>
          <option value="Kryvyi_Rih">Kryvyi Rih</option>
          <option value="Mykolaiv">Mykolaiv</option>
          <option value="Mariupol">Mariupol</option>
          <option value="Luhansk">Luhansk</option>
          <option value="Sevastopol">Sevastopol</option>
          <option value="Vinnitsa">Vinnitsa</option>
          <option value="Simferopol">Simferopol</option>
          <option value="Makiivka">Makiivka</option>

      </select>
  </div>
);
};

export {SelectCity};