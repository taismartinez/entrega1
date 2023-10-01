let receivedProd = localStorage.getItem("Id-Prod");
const container = document.getElementById("infoProd");
const contImg = document.getElementById("contImg");
let containercomm = document.getElementById("containercommProd");
let containerrel = document.getElementById("containerRelatedProd"); 
let item = [];

//Fetch para obtener las fotos  de los productos
function callJSONImg() {
    fetch("https://japceibal.github.io/emercado-api/products/" + receivedProd + ".json")

        .then(response => response.json())
        .then(data => {
            img = data.images;
            callImg(img) //Muestro las imagenes
        })
        .catch(error => console.log(error))
}

callJSONImg();

//Llamo imagenes del producto
function callImg(img) {
    const container =  document.getElementById("container2");
    const imgActive =  document.getElementById("imgActive");

    const image1 = document.createElement("img");
        image1.src = `${img[0]}`;
        image1.classList.add(`d-block`); 
        image1.classList.add(`w-30`); 
        imgActive.appendChild(image1);

    for(let i = 1; i < img.length; i++){
        const div = document.createElement("div");
        div.classList.add(`carousel-item`)
        container.appendChild(div);

        const image = document.createElement("img");
        image.src = `${img[i]}`;
        image.classList.add(`d-block`); 
        image.classList.add(`w-30`); 
        div.appendChild(image);
        
    }
}

// fetch para la info de los productos 
async function callJSON() {
    try {
        const response = await fetch("https://japceibal.github.io/emercado-api/products/" + receivedProd + ".json")
        const data = await response.json()
        item = data;
        
        return showInfo(item)
    } catch (error) {
        console.log(error)
    }

}

callJSON()
//Informaciòn de los productos 

function showInfo(item) {
    container.innerHTML = "";
        container.innerHTML += `
        
        <div class ="card">
         <p class="title">Nombre</p>
         <p class="description"> ${item.name} </p>
        </div>

        
        <div class ="card">
        <p  class="title">Descripción</p>
        <p class="description"> ${item.description} </p>
        </div>

        <div class ="card">
        <p class="title">Costo</p>
        <p class="description"> ${item.currency} ${item.cost} </p>
        </div>
    
        <div class ="card">
        <p  class="title">Vendidos</p>
        <p class="description">${item.soldCount}</p>
        </div>
        <div class ="card">
        <p  class="title">Categorias</p>
        <p class="description" >${item.category}</p>
        </div>`
    } 


    
//Llamamos a los comentarios
async function callJSONcomm() {
    try {
        const response = await fetch("https://japceibal.github.io/emercado-api/products_comments/" + receivedProd + ".json")
        const data = await response.json()
        com = data;
        rel= data.relatedProducts
        console.log(com)
        console.log(rel)
        return showInfocomm(com)
    } catch (error) {
        console.log(error)
    }
}
callJSONcomm()
function showInfocomm(com) {
    containercomm.innerHTML = "";
    console.log(com)

    console.log(com)
    containercomm.innerHTML += ""
    for (let i = 0; i < com.length; i++) {
        containercomm.innerHTML += `
        
        <div class ="comms">
        <p class ="name">${com[i].user}</p><!– Nombre –>
        <p class = "date">${com[i].dateTime}</p><!– Date –>
       
        <span class="fa fa-star checked">${com[i].score} </span> <!– Puntuación –>
        
        <p>${com[i].description} <!– Descripción –></p>
        </div>
            `;
    }
}

// Desafiate  - Ingresar comentarios

document.addEventListener('DOMContentLoaded', function () {

    var today = new Date();
    var dateNow = today.toLocaleString('sv-SE');
    let userEmail = localStorage.getItem("correo");
    const formulario = document.querySelector('#comments form');
    const containerCommProd = document.getElementById('containercommProd');


    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log(dateNow)
        const comentario = document.getElementById('floatingTextarea').value;
        const puntuacion = document.getElementById('options').value;
        const nuevoParrafo = document.createElement('p');

        nuevoParrafo.innerHTML = `
        <div class="comms"> 
        <p class ="name">${userEmail}</p>
        <p class = "date">${dateNow}</p>
        <span class="fa fa-star checked">${puntuacion}
        </span> <br>
        <p>${comentario} </p></div>`;

        containerCommProd.appendChild(nuevoParrafo);


        document.getElementById('floatingTextarea').value = '';
    });
});


//Traer los productos relacionados
async function callJSONrel() {
    try {
        const response = await fetch("https://japceibal.github.io/emercado-api/products/" + receivedProd + ".json")
        const data = await response.json()
        
        rel= data.relatedProducts
       
        console.log(rel)
        return showInforel(rel)
    } catch (error) {
        console.log(error)
    }
    selectedProduct(rel)
}
callJSONrel()
function showInforel(rel) {
    
   /* containerrel.innerHTML += ""
    for (let i = 0; i < rel.length; i++) {
        containerrel.innerHTML += `
        
        <div class ="rel" id="${rel[i].id}" >
        <p class ="name">${rel[i].name}</p>
      
        <div class = "img">
        
        <img src=${rel[i].image} style="width:40%">
        </div>
        
        </div>
            `;
    }*/

    const container =  document.getElementById("container3");
    const imgActive =  document.getElementById("imgActive1");

    const image1 = document.createElement("img");
        image1.src = `${rel[0].image}`;
        image1.classList.add(`d-block`); 
        image1.classList.add(`w-50`); 
        imgActive.appendChild(image1);

        

    for(let i = 1; i < rel.length; i++){

    console.log(rel)
       // <p class ="name">${rel[i].name}</p>
        const div = document.createElement("div");
        div.classList.add(`carousel-item`);
        div.setAttribute("id", `${rel[i].id}`);
        container.appendChild(div);
        //Parrafo para el nombre
        const p = document.createElement("p");
        p.textContent = `${rel[i].name}`
        p.classList.add("carousel-item");
        container.appendChild(p)
        //Agrego Imagenes
        const image = document.createElement("img");
        image.src = `${rel[i].image}`;
        image.classList.add(`d-block`); 
        image.classList.add(`w-50`); 
        div.appendChild(image);
       
        
    }
}


//
function selectedProduct(rel){
    containerrel.addEventListener("click", (e) =>{
        let selectRel = e.target.closest(".rel").id; // closest busca hacia "atrás" el elemento que coincida
        localStorage.setItem("relidprod", selectRel)
        window.location = "product-info.html"
        console.log(selectRel)
    } )
}




