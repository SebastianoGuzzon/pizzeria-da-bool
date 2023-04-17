
import pizze from './db.js';
import {checkVeg} from './functions.js'

const ul = document.querySelector('ul')

const submit = document.getElementById('btnform');

const noVegIngredients = ['salame', 'mozzarella', 'salsiccia', 'acciughe', 'prosciutto', 'grana', 'scamorza', 'gorgonzola'];

const pizzeRemap = pizze.map(pizza => {
  const {name, image, price, description, ingredients, votes} = pizza
  const isVeg = checkVeg(ingredients);
  return {name, image, price, description, ingredients, votes, isVeg}
});

//ordina pizze per prezzo crescente

reorderPizze()

submit.addEventListener('click', function(){
  const inputName = document.querySelector('[name = "name"]');
  const inputPrice = document.querySelector('[name = "price"]');
  const selectIngredients = document.querySelector('[name = "ingredients"]');
  const selectedIngredients = [];

  for(let ingredient of selectIngredients.options){
    if(ingredient.selected){
      selectedIngredients.push(ingredient.value)
    }
  }
  console.log(inputName.value, inputPrice.value, selectedIngredients);

  const newPizza = {
    name: inputName.value,
    price: inputPrice.value,
    ingredients: selectedIngredients,
  }
  pizzeRemap.push(newPizza);
  reorderPizze()
})

//ordina pizze,
// ordina pizze per prezzo crescente,
// stampa

function reorderPizze() {

  pizzeRemap.sort((a, b) => a.price - b.price);

  ul.innerHTML = '';
  pizzeRemap.forEach(pizza => {
    const li = document.createElement('li')
    li.innerHTML = `${pizza.name} €${pizza.price}`;
    ul.appendChild(li);
  })
  console.log(pizzeRemap);
}