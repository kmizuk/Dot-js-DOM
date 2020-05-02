"use strict";

// {
//   function update() {
//       // document.querySelector("h1").textContent = "Changed";
//       // document.querySelector("#target").textContent = "Changed";
//       document.getElementById("target").textContent = "Changed!";
//       document.querySelectorAll("p").forEach((p, index) => {
//           p.textContent = `${index + 1}番目のわっしょい`;
//         });
//     }

//     setTimeout(update, 1000);
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById("target");
//     // targetNode.textContent = "Changed!";
//     // targetNode.title = "Title!";
//     // targetNode.style.color = "red";
//     // targetNode.style.backgroundColor = "black";
//     // targetNode.classList.add("my-color");

//     // if (targetNode.classList.contains("my-color") === true) {
//     //   targetNode.classList.remove("my-color");
//     // } else {
//     //   targetNode.classList.add("my-color");
//     //
//     // }
//     targetNode.classList.toggle("my-color");
//   });
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const targetNode = document.getElementById("target");
//     targetNode.textContent = targetNode.dataset.translation;
//   });
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const item02 = document.createElement("li");
//     item02.textContent = "item02";

//     const ul = document.querySelector("ul");
//     ul.appendChild(item02);
//   });
// }

// {
//   document.querySelector("button").addEventListener("click", () => {
//     const li = document.createElement("li");
//     const text = document.querySelector("input");
//     li.textContent = text.value;
//     document.querySelector("ul").appendChild("li");

//     text.value = "";
//     text.focus();
//   });
// }

// {
//   document.addEventListener("mousemove", (e) => {
//     console.log(e.clientX, e.clientY);
//   });

//   document.addEventListener("keydown", (e) => {
//     console.log(e.key);
//   });
// }

