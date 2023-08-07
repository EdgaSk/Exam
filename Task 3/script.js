/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
2. Informacija, kuri pateikiama: "login" ir "avatar_url" (kaip nuotrauka) kortelėje
3. Žinutė - Press "Show Users" button to see users - turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
const outputDiv = document.querySelector('#output');
const messageElement = document.querySelector('#message');

function showUsers() {
  fetch('https://api.github.com/users')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        const card = document.createElement('div');
        card.className = 'user-card';
        const img = document.createElement('img');
        img.src = user.avatar_url;
        img.alt = user.login;
        const h2 = document.createElement('h2');
        h2.textContent = user.login;
        card.appendChild(img);
        card.appendChild(h2);
        outputDiv.appendChild(card);
      });
    })
    .catch((error) => {
      console.error('Error fetching Github users:', error);
      outputDiv.textContent = 'Error fetching Github users';
    });
  messageElement.style.display = 'none';
}
document.querySelector('#btn').addEventListener('click', showUsers);

