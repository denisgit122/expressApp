import axios from "axios";

const exchangeRete = {
   getAll:() => axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=8VWnkVjQk0WSSUChfvFdT8lkE9kxn8eAT9n0sUeT&currencies=EUR')

}
export {
    exchangeRete
}