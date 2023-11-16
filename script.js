/*video*/
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const duracionActual = document.getElementById('duracionActual');
    const duracionTotal = document.getElementById('duracionTotal');
}); 
let inicioVideo=()=>{
    video.play();
}
  
let pausaVideo=()=>{
    video.pause();
}

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const duracionActual = document.getElementById('duracionActual');
    const duracionTotal = document.getElementById('duracionTotal');
  
    video.addEventListener('loadedmetadata', function () {
     
      const duracionTotalSegundos = Math.floor(video.duration);
      const duracionMinutos = Math.floor(duracionTotalSegundos / 60);
      const duracionSegundos = duracionTotalSegundos % 60;
  
      duracionTotal.textContent = `${duracionMinutos}:${String(duracionSegundos).padStart(2, '0')}`;
    });
  
    video.addEventListener('timeupdate', function () {
    
      const tiempoActualSegundos = Math.floor(video.currentTime);
      const tiempoMinutos = Math.floor(tiempoActualSegundos / 60);
      const tiempoSegundos = tiempoActualSegundos % 60;
  
      duracionActual.textContent = `${tiempoMinutos}:${String(tiempoSegundos).padStart(2, '0')}`;
    });
  });
  
/*puzzle*/

let imagenes =[
    'imagen-0', 'imagen-1' , 'imagen-2'
]

let puzzle= document.getElementById('puzzle')
let piezas= document.getElementById('fotos')
let boton= document.getElementById('Reinicio')
let elementos = imagenes.length
while (imagenes.length) {
    const index= Math.floor(Math.random() * imagenes.length);
    const div= document.createElement('div');
    div.className= 'fotos';
    div.id=imagenes[index];
    div.draggable= true;
    div.style.backgroundImage = `url("imagenes/${imagenes[index]}")`;
    piezas.appendChild(div);
    imagenes.splice(index,1)
}

for (let i = 0; i < elementos; i++) {
    const div = document.createElement('div');
    div.className = 'placeholder';
    div.dataset.id = i;
    puzzle.appendChild(div);
}
piezas.addEventListener('dragstart', e => {
    e.dataTransfer.setData('id', e.target.id);
});
puzzle.addEventListener('dragover', e => {
    e.preventDefault();
    e.target.classList.add('hover');
});

puzzle.addEventListener('dragleave', e => {
    e.target.classList.remove('hover');
});

puzzle.addEventListener('drop', e => {
    e.target.classList.remove('hover');

    let id = e.dataTransfer.getData('id');
    let numero = id.split('-')[1]; 

    if (e.target.dataset.id === numero) {
        e.target.appendChild(document.getElementById(id));
        elementos--;
        if (elementos === 0) {
            alert('¡Puzzle completado!');
          document.body.classList.add('Reinicio');
        }
    
    }
    boton.addEventListener('click', function () {
    
        location.reload();
      });
});

