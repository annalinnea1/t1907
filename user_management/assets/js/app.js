const apiUrl = "https://reqres.in/api/users/";
// För att ta sig förbi Crome - göt att externa url:er tillåts
const proxyUrl = "https://cors-anywhere.herokuapp.com";
const usersDisplayNode = document.getElementById("users");

// Asynkron metod - väntar in resultatet innan den går vidare
const fetchData = async (page) => {
  // Två await pga väntar på fetch och att göra om till json-objekt. ? viktig -lägger sig efter url och ifrågasätter parametrar som vi skcikar med url
  let data = await (await fetch(apiUrl + `?page=${page}&per_page=3`)).json();
  return data;
};

const fetchPage = (page) => {
  fetchData(page).then((response) => {
    usersDisplayNode.innerHTML = "";
    displayUsers(response);
    displayNavigation(response);
  });
};

const displayNavigation = (response) => {
  let { page, total_pages } = response;
  let buttonsDisplay = document.createElement("div");
  // Lägger till knapp som man kan komma till föregående respektive nästa sida
  // ? turnary operator: om page == total_pages är sant fösta strängen, annars tom sträng
  let prevLink = page > total_pages/page-1 ? `<button onclick="fetchPage(${page - 1})"><<</button>`:''
  let nextLink = page < total_pages ?`<button onclick="fetchPage(${page + 1})">>></button>`:''
  buttonsDisplay.innerHTML = prevLink + nextLink;
  usersDisplayNode.appendChild(buttonsDisplay);
};
const displayUsers = (response) => {
  response.data.forEach((user) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("grid-item");
    let html = `<h3>${user.first_name} ${user.last_name} </h3>`;
    html += `<img src="${user.avatar}" />`;
    // <p> Gör att man hoppar ner en rad </p>
    html += `<p><a href="mailto:${user.email}">${user.email}</a></p>`;
    userDiv.innerHTML = html;
    userDiv.style.color = "lightpink"
    usersDisplayNode.appendChild(userDiv);
  });
};

// DOMContentLoaded triggas när sidan laddat färidgt.
document.addEventListener("DOMContentLoaded", () => {
  usersDisplayNode.classList.add("grid-container");
  fetchPage();
});
