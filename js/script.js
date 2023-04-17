import pizze from './db.js'
import { checkVeg } from './functions.js';



const pizzeRemap = pizze.map( pizza => {
  const {name, image, price, description, ingredients, votes} = pizza;
  const isVeg = checkVeg(ingredients);
  return {name, image, price, description, ingredients, votes, isVeg}
} )

pizzeRemap.sort((a,b) => a.price - b.price)

console.log(pizzeRemap);


// Accetta come parametro l'array delle pizze, calcola la media dei voti di ogni pizza e restituisce la pizza con la media più alta 
// function getPizzaTop() {

// }