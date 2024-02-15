// let newBtn = document.createElement("button");
// newBtn.innerText = "Click ME" ;

// let div = document.querySelector("div");
// // div.append(newBtn);
// // div.prepend(newBtn);
// // div.before(newBtn);
// // div.after(newBtn);

let newHeading = document.createElement("h1");
newHeading.innerText = "hello there";

document.querySelector("body").append(newHeading);

let para = document.querySelector("p");
para.remove();