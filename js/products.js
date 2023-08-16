function obtenerAutos(){
    const producto = document.getElementById("mostrar-productos");
    const promise = fetch("https://japceibal.github.io/emercado-api/cats_products/101.json");
        promise
            .then(response => response.json())
            .then(infoApi => {
                console.log(infoApi);
                let prod = infoApi.products
    
               for (let i = 0; i < prod.length; i++) {
                   producto.innerHTML += `<ul><div>
                   <div id=prod-name-cost><li>${prod[i].name} - ${prod[i].currency}  ${prod[i].cost}</li> </div>   
                   <li><div class=product-img ><img src=${prod[i].image} style= max-width:20vh></div></li>
                   <li class=product-desc>${prod[i].description}</li>  
                   <li class=product-soldcount>${prod[i].soldCount} vendidos</li></div>  
                    </ul>`;
                  
               }
            }); 
};
                    // <li class=product-id>${prod[i].id}</li>
obtenerAutos();
