const checkVeg = (ingredients) => {
  const noVegIngredients = ['salame', 'mozzarella', 'salsiccia', 'acciughe', 'prosciutto', 'grana', 'scamorza', 'gorgonzola'];
  let isVeg = true;

  ingredients.forEach(ingredient => {
    if (noVegIngredients.includes(ingredient)) isVeg = false;

  });
  return isVeg;
};


// Accetta come parametro l'array delle pizze, calcola la media dei voti di ogni pizza e restituisce la pizza con la media più alta 

function getPizzaTop(votes) { 


}

export {checkVeg};