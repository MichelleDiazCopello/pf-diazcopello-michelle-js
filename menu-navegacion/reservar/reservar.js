document.querySelector("form").onsubmit = ( event ) => {
    event.preventDefault()
}

document.querySelector ("#send-button").onclick = () => {

    Toastify ( {
        text: "Su consulta ha sido enviada.",
        duration: 3000,
        position: "right",
        onClick: function () {}
      } )
      .showToast ();
} 
