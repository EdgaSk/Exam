/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */
const ENDPOINT = 'cars.json';
async function fetchAndDisplayCars() {
  try {
    const data = await (await fetch(ENDPOINT)).json();
    const outputDiv = document.querySelector('#output');
    data.forEach((car) => outputDiv.appendChild(createCarCard(car)));
  } catch (error) {
    console.error('Error fetching car data:', error);
  }
}
const createCarCard = (car) => {
  const carCard = document.createElement('div');
  const carTitle = document.createElement('h2');
  carTitle.textContent = car.brand;
  carCard.appendChild(carTitle);

  const modelsList = document.createElement('ul');
  car.models.forEach((model) => {
    const modelItem = document.createElement('li');
    modelItem.textContent = model;
    modelsList.appendChild(modelItem);
  });
  carCard.appendChild(modelsList);
  return carCard;
};
window.onload = fetchAndDisplayCars;




