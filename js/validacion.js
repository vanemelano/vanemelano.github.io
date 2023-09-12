//Validación formulario

const botEnvio = document.querySelector("#envio");
const formu = document.querySelector("#formulario");

botEnvio.addEventListener("click",(evento) => {
    evento.preventDefault();
    valido = validar();

    if(valido==true){
      formu.submit();
    }  
})

function validar(){ //Función que valida los inputs de "Datos Personales"
  //Declaración de constantes
  const nombre = document.getElementById("nombre");
  const apellidos = document.getElementById("apellidos");
  const numTel = document.getElementById("telefono");
  const correoElec = document.getElementById("email");
  const privacidad = document.getElementById("privacidad");

  let correcto = true;
  
        if(nombre.value == null || nombre.value == ""){
          setError(nombre,"El campo 'NOMBRE' no puede estar vacío.");
          correcto = false;
        }else{
            let nombreRe =/^[a-zA-Z ]{2,15}$/; //longitud de 15 carácteres .
        if(!nombreRe.exec(nombre.value)){
            setError(nombre,"El nombre sólo puede estar compuesto de letras.");
            correcto = false;
        }else{
          setSuccess(nombre);
        }
      }
 
/*******************Apellidos************************/
        if(apellidos.value == null || apellidos.value == ""){
          setError(apellidos,"El campo 'APELLIDOS' no puede estar vacío.");
          correcto = false;
        }else{
          let apesRe = /^[a-zA-Z ]{2,40}$/;//Longitud de 40 carácteres.
        if(!apesRe.exec(apellidos.value)){
          setError(apellidos,"Los apellidos sólo pueden estar compuesto de letras.");
          correcto = false;
        }else{
          setSuccess(apellidos);
        }
      }
         
/*******************Teléfono*************************/
if(numTel.value == null || numTel.value == ""){
  setError(numTel,"El campo 'TELÉFONO' no puede estar vacío.");
  correcto = false;
}else{
  let numeroRe = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3}$/ //Expresión regular permitida en el input teléfono,longitud 9 carácteres.
if(!numeroRe.exec(numTel.value)){
  setError(numTel,"El campo teléfono debe estar compuesto de 9 dígitosnumericos.");
  correcto = false;
}else{
  setSuccess(numTel);
}
}

/**********************Email*************************/
if(correoElec.value == null || correoElec.value == ""){
  setError(correoElec,"El campo 'EMAIL' no puede estar vacío.");
  correcto = false;
}else{
    let correoRe = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //Expresión regular permitida en el input correo
if(!correoRe.exec(correoElec.value)){
  setError(correoElec,"Los datos introducidos en el campo email no son correctos.");
  correcto = false;
}else{
  setSuccess(correoElec);
}
}

/*******************Check box************************/
if(!privacidad.checked){
    setError(privacidad,"Tiene que aceptar la politica de privacidad.");
    correcto = false;
  }else{
    setSuccess(privacidad);
  }
    
if (correcto==true){//Si se cumplen todas las condiciones se validará exitosamente el formulario
    return true;
}else{
    return false ;//Si no se cumple algunas de las condiciones, dará el mensaje de error.
}
}     
        function setError(input, message) {    //función para ejecutar error si los inputs no cumplen con las condiciones.
          const datosPersonales = input.parentElement;
          const small= datosPersonales.querySelector("small");
          datosPersonales.className="datos-personales error";
          small.innerText=message;
        }
/*
        const datosPersonales = input.parentElement;
        datosPersonales.className = "datos-perosnales success";*/

        function setSuccess(input){  
          const datosPersonales = input.parentElement;
          datosPersonales.className = "datos-personales  success"; //Con esta función si los imputs cumplen con todas las condiciones, seran marcados en #ddd color y se podr
        }
    


