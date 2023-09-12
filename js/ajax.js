
function cargar(){  //Función para cargar automáticamente el documento.
    var xhr = new XMLHttpRequest();//Objeto ajax reconocido por la mayoría de navegadores.
    xhr.onreadystatechange = function(){//Función que se va a ejecutar por cada cambio de estado.
    if(this.readyState == 4 && this.status == 200){//Si la peitcion ha finalizado , está lista (4), y está ok (200)...
            cargarXML(this);//Se ejecuta la función "cargarXML"
        }
    };
    xhr.open("GET","expo.xml",true);//Se abrirá el archivo xml de manera asicrona con el "true".
    xhr.send();//Se envia.
}

function cargarXML(xml) {//La función para cargar el xml.
    var docXML = xml.responseXML;//Captura la respuesta que envia el servidor.
    var tabla = "<tr><th>EVENTO</th><th>FECHA</th><th>PROVINCIA</th><th>DIRECCIÓN</th><th>TEMA</th></tr>";//Se define una tabla en donde irá la información del xml.
    var expos = docXML.getElementsByTagName("novedad");//Declaración de variable para extraer los elementos de xml,creando un array llamado "expos".
    for (var i = 0 ; i < expos.length; i++){//Bucle para recorrer cada elemento de las etiquetas del xml.
        tabla += "<tr><td>";
        tabla += expos[i].getElementsByTagName("evento")[0].textContent;
        tabla += "</td><td>";
        tabla += expos[i].getElementsByTagName("fecha")[0].textContent;
        tabla += "</td><td>";
        tabla += expos[i].getElementsByTagName("provincia")[0].textContent;
        tabla += "</td><td>";
        tabla += expos[i].getElementsByTagName("direccion")[0].textContent;
        tabla += "</td><td>";
        tabla += expos[i].getElementsByTagName("tema")[0].textContent;
        tabla += "</td><tr>";
    }
    
    document.getElementById("tabla").innerHTML = tabla;//Finalmente se código.

}
      