const  checkVeg = (ingredients) => {
  const noVegIngredients = [
    'salame',
    'mozzarellla',
    'salsiccia',
    'acciughe',
    'prosiutto',
    'grana',
    'scamorza',
    'gorgonzola'
  ];
  let isVeg = true;
  ingredients.forEach(ingredient => {
    if(noVegIngredients.includes(ingredient)){
      isVeg = false;
    }
  });

  return isVeg;
}
// Accetta come parametro l'array delle pizze, calcola la media dei voti di ogni pizza e restituisce la pizza con la media più alta 
// function getPizzaTop() {

// }

export {checkVeg}