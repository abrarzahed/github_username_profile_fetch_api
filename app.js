// todo: Promise , asynchronous javascript(then,async await)
let container = document.querySelector(".container");
const loading = document.querySelector("h3");

// // using promise
// fetch("https://api.github.com/users")
//   .then((res) => res.json())
//   .then((data) => {
//     // console.log(data);
//     data.forEach((element) => {
//       container.innerHTML += `
//       <div class="card">
//       <h2 class="title">${element.login}</h2>
//       <img class="image" src="${element.avatar_url}" alt="" />
//       </div>
//       `;
//     });
//   });

// using async await

const getUsers = async () => {
  const res = await fetch("https://api.github.com/users");
  if (res.status == 200) loading.style.display = "none";
  const data = await res.json();
  data.forEach((elm) => {
    container.innerHTML += `
      <div class="card">
      <h2 class="title">${elm.login}</h2>
      <img class="image" src="${elm.avatar_url}" alt="" />
      </div>
      `;
  });
};
getUsers();
