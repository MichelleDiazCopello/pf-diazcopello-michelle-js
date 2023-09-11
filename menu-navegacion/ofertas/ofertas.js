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

const swiper = new Swiper ('.swiper', {
    direction: 'vertical',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


document.querySelector ("#oferta2x1").onclick = () => {
  
  Swal.fire ( {
    title: "Promoción 2x1",
    text: "Disfrutá de este 2x1 de Domingos a Jueves, durante todo el mes.",
    icon: "success",
    footer: 'Válido solo para temporada baja, excepto feriados.'
  })

} 

document.querySelector ("#hasta30off").onclick = () => {
  
  Swal.fire ( {
    title: "Promoción hasta 30% off.",
    text: "2 NOCHES= 20% off. 3 NOCHES= 30% off.",
    icon: "success",
    footer: 'Válido solo para temporada baja, excepto feriados.'
  })

} 

document.querySelector ("#anticipate").onclick = () => {
  
  Swal.fire ( {
    title: "Anticipate a las vacaciones.",
    text: "Hasta 35% off abonando la totalidad de tu estadía.",
    icon: "success",
    footer: 'Promoción válida hasta el 31 de Octubre.'
  })

} 