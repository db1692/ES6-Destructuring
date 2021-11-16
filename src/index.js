// import animals, {useAnimals} from "./data";

// // Destructuring Arrays
// const [cat, dog] = animals;  //Objects in array can be renamed at this point
// // console.log(cat);
// // // const {name = "Fluffy", sound = "Purr"} = cat;  //Values cannot be renamed without a colon
// // const{name, sound, feedingRequirements:{food, water}} = cat;
// // console.log(food);

// const [animal, makeSound] = useAnimals(cat);
// console.log(animal);
// makeSound();

// // CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

const [honda, tesla] = cars;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;
const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  coloursByPopularity: { 0: hondaTopColour }
} = honda;
const {
  coloursByPopularity: { 0: teslaTopColour }
} = tesla;

console.log(cars);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
      <th>Top Colour</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
);
