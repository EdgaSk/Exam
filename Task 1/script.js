/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiama
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const outputDiv = document.querySelector("#output");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const kilograms = parseFloat(document.querySelector("#search").value);
    if (isNaN(kilograms)) {
      outputDiv.textContent = "Please enter a valid number!";
      return;
    }
    const conversions = [
      { unit: "lb", value: kilograms * 2.2046 },
      { unit: "g", value: kilograms / 0.001 },
      { unit: "oz", value: kilograms * 35.274 },
    ];

    const outputList = document.createElement("ul");
    for (const { unit, value } of conversions) {
      const listItem = document.createElement("li");
      listItem.textContent = `${value.toFixed(2)} ${unit}`;
      outputList.appendChild(listItem);
    }

    outputDiv.textContent = `${kilograms.toFixed(2)} kg is:`;
    outputDiv.appendChild(outputList);
  });
});

  