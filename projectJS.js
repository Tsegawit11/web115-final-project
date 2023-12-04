let btnClear= document.querySelector("reset");
let inputs= document.querySelectorAll("reset")
btnClear.addEventListener("click", {
  inputs:forEach(inputs=input.value="")
});

window.addEventListener('load', () => { 
  const button = document.querySelector('#clear'); 
  button.addEventListener('click', () => { 
      document.querySelector('#enter').value = ""; 
  }); 
});
$(document).ready(()=> { 
  alert("nigge") 
  $('#clear').on('click', () =>{ 
      $('#enter').val(""); 
  }) 
});