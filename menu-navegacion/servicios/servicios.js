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

const serviciosContainer = document.querySelector ("#servicios-container");

fetch ('servicios.json')
    .then ( (res) => res.json ())
    .then ( (servicios) => {
        const serviciosAHTML = array => {

            const cards = array.reduce ( (acc, element) => {
                return acc + `
                <div class="card-service card-${element.id}">
                <h2>
                    ${element.servicio}
                </h2>
                <figure>
                    <img src="${element.img}" alt="${element.alt}">
                </figure>
                <h4>${element.descripcion}</h4>
            </div>
                `
            }, "" )
            serviciosContainer.innerHTML = cards
        }
        
        serviciosAHTML (servicios)
    })