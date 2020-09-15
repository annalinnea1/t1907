const apiUrl = "https://reqres.in/api/users/";
// För att ta sig förbi Crome - göt att externa url:er tillåts
const proxyUrl = "https://cors-anywhere.herokuapp.com";
const usersDisplayNode = document.getElementById("users");

// Asynkron metod - väntar in resultatet innan den går vidare
const fetchUsers = async () => {
  // Två await pga väntar på fetch och att göra om till json-objekt
  let data = await (await fetch(apiUrl)).json();
  return data;
};

// DOMContentLoaded triggas när sidan laddat färidgt.
document.addEventListener("DOMContentLoaded", () => {
  fetchUsers().then((response) => {
    response.data.forEach((user) => {
      let userDiv = document.createElement("div");
      let htm = `<h3>${user.first_name} ${user.last_name} </h3>`;
      userDiv.innerHTML = htm;
      usersDisplayNode.appendChild(userDiv);
    });
  });
});
