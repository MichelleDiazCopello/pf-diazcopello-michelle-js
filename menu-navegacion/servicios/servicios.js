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

  const servicios = [
    {
        id: 1,
        servicio: "Sala de Juegos Infantiles",
        descripcion: "Sala con mesas pequeñas, juegos didácticos y de mesa, juguetes, pizarrón, libros y mucho material para dibujar y pintar.",
        img: "../../media/sala-juegos-infantiles.webp",
        alt: "Sala de Juegos Infantiles",
    },
    {
        id: 2,
        servicio: "Sala de Trabajo",
        descripcion: "Espacio con escritorio, útiles de oficina y ordenador para trabajo en vacaciones.",
        img: "../../media/work-room.webp",
        alt: "Sala de Trabajo",
    },    
    {
        id: 3,
        servicio: "Rincon de Lectura",
        descripcion: "Tenemos a su disposición una gran cantidad de libros para leer en paz y sumergirse en la literatura.",
        img: "../../media/rincon-lectura.webp",
        alt: "Cuarto de Lectura",
    },    
    {
        id: 4,
        servicio: "Juegos Infantiles al Aire Libre",
        descripcion: "Diseñados para que los niños puedan jugar de forma segura y disfrutar del exterior.",
        img: "../../media/juegos-infantiles.webp",
        alt: "Juegos Infantiles",
    },
]

const serviciosContainer = document.querySelector ("#servicios-container");

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