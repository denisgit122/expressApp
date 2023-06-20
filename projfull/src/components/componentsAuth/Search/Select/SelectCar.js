import css from './Select.module.css'

const SelectCar = ({setOnChange}) => {
return (
  <div>
      <select className={css.selectCar} name="cars" id="cars"
              onChange={event => setOnChange(event.target.value)}
      >
          <option>Mark</option>

          <optgroup label="Volkswagen">
              <option value="polo">Polo</option>
              <option value="tiguan">tiguan</option>
              <option value="passat">passat</option>
              <option value="touareg">touareg</option>
              <option value="golf">golf</option>
          </optgroup>

          <optgroup label="Mercedes">
              <option value="eqs">EQS</option>
              <option value="cla">CLA</option>
              <option value="eclass">E-class</option>
          </optgroup>

          <optgroup label="BMV">
              <option value="x1">X1</option>
              <option value="x2">X2</option>
              <option value="x3">X3</option>
              <option value="x4">X4</option>
              <option value="x5">X5</option>
              <option value="x6">X6</option>
              <option value="x7">X7</option>
          </optgroup>

          <optgroup label="Toyota">
              <option value="camry">Camry</option>
              <option value="auris">Auris</option>
              <option value="avensis">Avensis</option>
              <option value="celica">Celica</option>
              <option value="mark">Mark</option>
          </optgroup>

          <optgroup label="Audi">
              <option value="rs6">RS6</option>
              <option value="a1">A1</option>
              <option value="a2">A2</option>
              <option value="a3">A3</option>
              <option value="a4">a4</option>
              <option value="a6">a6</option>
              <option value="tt">TT</option>
          </optgroup>

          <optgroup label="Renault">
              <option value="clio">Clio</option>
              <option value="captur">Captur</option>
              <option value="laguna">Laguna</option>
              <option value="megane">Megane</option>
          </optgroup>

          <optgroup label="Ford">
              <option value="puma">Puma</option>
              <option value="focus">Focus</option>
              <option value="kuga">Kuga</option>
              <option value="ecosport">Ecosport</option>
          </optgroup>

          <optgroup label="Skoda">
              <option value="octavia">Octavia</option>
              <option value="kodiaq">Kodiaq</option>
              <option value="kamiq">Kamiq</option>
              <option value="scala">Scala</option>
          </optgroup>
      </select>
  </div>
);
};

export {SelectCar};