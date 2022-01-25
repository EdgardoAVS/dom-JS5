window.addEventListener("DOMContentLoaded", () =>{
  document.getElementById("compass").onclick = spin;
});

let rotation = 0;

function spin () {
  rotation += 15;
  
  if(rotation >= 360) {
    rotation = 0;
  }
  const arrowContainer = document.getElementById('arrow-container');
  arrowContainer.style.transform = `rotate(${rotation}deg)`;
  document.getElementById('show-degrees').innerHTML = `${rotation}°`;
}





