// let h2 = document.querySelector("h2");
// console.dir(h2);
// h2.innerText = h2.innerText + " from Tanish";

let divs = document.querySelectorAll(".box");
// console.log(divs);
// divs[0].innerText = "Hello 1";
// divs[1].innerText = "Hello 1";
// divs[2].innerText = "Hello 1";

// using for of loop
let idx = 1;
for(div of divs){
    div.innerText = `hello world ${idx}`;
    idx++;
}