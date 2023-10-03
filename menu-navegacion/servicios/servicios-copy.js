document.querySelector("form").onsubmit = ( event ) => {
    event.preventDefault()
}

document.querySelector (".send-button").onclick = () => {

    Toastify ( {
        text: "Su consulta ha sido enviada.",
        duration: 3000,
        position: "right",
        onClick: function () {}
      } )
      .showToast ();
  } 

// const serviciosContainer = document.querySelector ("#servicios-container");

// fetch ("/servicios.json")
//     .then ( (res) => res.json ())
//     .then ( (servicios) => {
//         servicios.forEach ( (element) => {
//             const cards = document.createElement ('div')
//             li.innerHTML = `
//             <div class="card-service card-${element.id}">
//                 <h2>
//                 ${element.servicio}
//                 </h2>
//                 <figure>
//                     <img src="${element.img}" alt="${element.alt}">
//                 </figure>
//                 <h4>${element.descripcion}</h4>
//             </div>
//             `
//             serviciosContainer.append (cards)
//         })
//     })

    const lista = document.querySelector("#servicios-container");

    fetch('/servicios.json')
        .then( (res) => res.json())
        .then( (data) => {
    
            data.forEach((producto) => {
                const li = document.createElement('li')
                li.innerHTML = `
                    <h4>${producto.nombre}</h4>
                    <p>${producto.precio}</p>
                    <p>Código: ${producto.id}</p>
                    <hr/>
                `
       
                lista.append(li)
            })
        })
    