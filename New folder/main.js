const openshopping= document.querySelector(".openshopping");
const closeshopping= document.querySelector(".closeshopping");
const list= document.querySelector(".list");
const listCard= document.querySelector(".listCard");
const total= document.querySelector(".total");
const body= document.querySelector("body");
const quantity= document.querySelector(".quantity");


openshopping.addEventListener("click",()=>{
    body.classList.add("active")
})
closeshopping.addEventListener("click",()=>{
    body.classList.removeEventListener("active")
})

let produts= [
    {
    id:1,
    nome:"produt 1",
    image:"1.PNG",
    preco:2000
},
    {
    id:2,
    nome:"produt2",
    image:"2.PNG",
    preco:2200
    },
    {
    id:3,
    nome:"produt3",
    image:"3.PNG",
    preco:2300
},
    {
    id:4,
    nome:"produt4",
    image:"4.PNG",
    preco:2400
},
    {
    id:5,
    nome:"produt5",
    image:"5.PNG",
    preco:2500
},
    {
    id:6,
    nome:"produt6",
    image:"6.PNG",
    preco:2000
},
    {
    id:7,
    nome:"produt7",
    image:"7.PNG",
    preco:2700
},
    {
    id:8,
    nome:"produt8",
    image:"8.PNG",
    preco:2800
},
]

let listCards= [];

const initApp= () => {
    produts.forEach((value,key) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("item");
        newDiv.innerHTML= `
        <img src= "img/${value.image}">
        <div class ="title">${value.nome}</div>
        <div class = "preco">${value.preco.toLocaleString}</div>
        <button onclick = "addTocard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv)
    })
}

initApp()
