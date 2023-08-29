let catid = localStorage.getItem("catID");

function obtenerAutos(){
    const producto = document.getElementById("showProducts");
    const promise = fetch("https://japceibal.github.io/emercado-api/cats_products/"+ catid +".json");
        promise
            .then(response => response.json())
            .then(infoApi => {
                console.log(infoApi);
                let prod = infoApi.products
    
               for (let i = 0; i < prod.length; i++) {
                   producto.innerHTML += `
                    <div id="container-prod">
                        <div>
                            <img id="div__img-prod" src=${prod[i].image} style= max-width:20vh>
                        </div>
                        <div><h5> ${prod[i].name} - ${prod[i].currency}  ${prod[i].cost}</h5>
                            <div id="container__div-sold"> ${prod[i].soldCount} vendidos   </div>
                            
                            <p>${prod[i].description}</p>
                        </div>
                    </div> `;
                    
                   
                  
               }
            }); 
};
                   
obtenerAutos();

//Llamado a tipo de productos a traves de su categoria
if (catid ==="101") {
    document.getElementById("categories").innerHTML = "Autos";
} else if (catid ==="102") {
    document.getElementById("categories").innerHTML = "Juguetes";
} else if (catid ==="103") {
    document.getElementById("categories").innerHTML = "Muebles";
}
