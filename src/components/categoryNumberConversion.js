const categoryNumber = {
  "Nature":17,
  "Mathematics": 19, 
  "Computers": 18, 
  "Politics": 24, 
}

function getCategoryFromNumber(number){
  return Object.keys(categoryNumber).find(key => categoryNumber[key] === number);
}
function getNumberFromCategory(category){
  return categoryNumber[category]; 
}
export {getCategoryFromNumber, getNumberFromCategory}

