// un garagiste vous demande de compter le nombre de roues qu'il y a dans son garage. 
// Les roues sont toutes montées sur des véhicules de types: 
// monocycle: 1 roue, moto: 2 roues, voiture: 4 roues, limousine: 6 roues .
// Ecrivez une fonction countWheels qui prend 4 paramètres, qui correspondent au nombre de chaque véhicules 
// et qui retourne le nombre de roues totales:

const NB_WHEELS_CYCLE_a = 1 
const NB_WHEELS_MOTO_b = 2
const NB_WHEELS_CARS_c = 3
const NB_WHEELS_LIM_d = 4



const countWheels = (a, b, c, d) => {
  return a*1 + b*2 +c*3 +d*4
}

console.log(countWheels(2,10, 20, 7, 8))