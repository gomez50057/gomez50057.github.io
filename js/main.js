


var grid = new Muuri('.grid', {
  // Diseño en cambio de tamaño (con 100 ms de rebote)
  layoutOnResize: 100,
  layoutDuration: 600,
  dragEnabled: true,
  layout: {
    fillGaps: true
  }
});
// Cuando todos los elementos se hayan cargado, actualice sus
// dimensiones y diseño de la cuadrícula.
window.addEventListener('load', function () {

  grid.refreshItems().layout();
  // Para un pequeño toque final, vamos a desvanecernos
  // las imágenes después de que todas se hayan cargado y
  // están correctamente posicionados
  document.body.classList.add('images-loaded');

  //Filtra de img con data-filter

  const buttons = document.querySelectorAll('.btn')
  const storeImages = document.querySelectorAll('.item')

  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      e.preventDefault()
      const filter = e.target.dataset.filter

      storeImages.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block'
          grid.refreshItems().layout();
        } else {
          if (item.classList.contains(filter)) {
            item.style.display = 'block'
            grid.refreshItems().layout();
          }
          else {
            item.style.display = 'none'
          }
        }
      })
    })
  })


});











// (function() {
//     const buttons = document.querySelectorAll('.btn')
//     const storeImages = document.querySelectorAll('.item')

//     buttons.forEach((button) => {
//         button.addEventListener('click', (e) => {
//             e.preventDefault()
//             const filter = e.target.dataset.filter

//             storeImages.forEach((item) => {
//                 if (filter === 'all'){
//                     item.style.display = 'block'
//                 } else{
//                     if(item.classList.contains(filter)){
//                         item.style.display = 'block'
//                     }
//                     else {
//                         item.style.display = 'none'
//                     }
//                 }
//             })
//         })
//     })

// })();



//moon y sun
const btnSwitch = document.querySelector("#switch")
btnSwitch.addEventListener('click', () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});


//Boton que sube 
window.onscroll = function () {
  //console.log(document.documentElement.scrollTop);
  if (document.documentElement.scrollTop > 10) {
    document.querySelector('.go-top-container').classList.add('show');

  }
  else {
    document.querySelector('.go-top-container').classList.remove('show');
  }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});


