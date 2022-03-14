function texto() {

    var input_texto=document.getElementById("nombre").value;
  
    if(input_texto.length<4){
        alert("Tonto o que, mas de 4 letras anda");
    }

}

function validar(){

    var email=document.getElementsByTagName("input")[1].value;
    validatemail(email);
}


function validatemail(email){
        
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
         alert("La dirección de email " + email + " es correcta.");
        } else {
         alert("La dirección de email es incorrecta.");
        }
      }
      
function si(){

    var si=document.createElement("input");
    si.type="number";
    si.id="valor_km"
    var km = document.getElementById("km");
    km.appendChild(si);

}

function comprobar(){
    var km = document.getElementById("valor_km").value;
    var email=document.getElementsByTagName("input")[1].value;
    var texto=document.getElementById("nombre").value;
    alert("Te llamas" + texto + "con mail" + email + " y has corrido carreras de " + km + "km");
}
