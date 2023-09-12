/*PRESUPUESTO*/


//Declaración de variable de suma total de presupuesto
let sumaTotal = 0;
//Creación de función con constantes declaradas
(()=>{
  let sumaTotal = 0;
//Declaración de constantes
const tipoProd= document.querySelector("#opciones");
const plazoDias= document.querySelector("#plazo");
const servAdicional= document.querySelectorAll("#extras>input");
const precioFinal= document.querySelector("#presupuesto");
//Creación de la función para sumar los valores de los elementos
let suma = ()=>{
  sumaTotal= parseInt(tipoProd.value);

  switch (plazoDias.value) {
    case "1": //24 hs por encargo
        sumaTotal += 10;
        break;
    case "2": //48 hs por encargo
        sumaTotal += 5;
        break;
    case "3": //72 hs por encargo
        sumaTotal += 0;
        break;
    default: //por default
        sumaTotal += 0;
        break;
  }

  servAdicional.forEach(element => {
      if(element.checked){
        sumaTotal += parseInt(element.value);
      }
  });

  precioFinal.value=sumaTotal;

}
//Función de bucle "foreach", para recorrer el array creado dentro de la variable de servicios extras y sumarlo.
servAdicional.forEach(element =>{
    element.addEventListener("change",suma,false)
});
//Evento "change" para accionar la suma al elegir diferentes opciones de desayunos.
tipoProd.addEventListener("change",suma,false);
//Evento "change" para aderir la suma al elegir el plazo de días.
plazoDias.addEventListener("change",suma,false);

}
)();





