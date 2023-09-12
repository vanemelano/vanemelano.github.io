
    // En caso de que los servicios de geolocalización están habilitados ...
    if(navigator.geolocation){
    // LLamamos a getCurrentPosition para obtener la ubicación actual del usuario
        navigator.geolocation.getCurrentPosition( 
        sucess,
        error,
        options);
    }else{ 
    //Si los servicios de geolocalización no están disponibles entonces saldrá el alerta...
    alert("Los servicios de geolocalización  no están disponibles");
    }
    //Como se carga dicho mapa
    var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
    };
    //Función que ejecuta el mapa con ruta desde la ubicación actual del usuario hasta la tienda 
    function sucess(position) {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
    //Ponemos el mapa
        let map = L.map('map', {
            center: [latitude, longitude],
            zoom: 12
        });
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //Declaramos la variable de la ruta desde a ubicación actual del usuario hasta la tienda 
    let control = L.Routing.control({
        waypoints: [
            L.latLng(latitude,longitude),
            L.latLng(42.16234,-8.62027)
        ],
        language: 'es',
        show: true,
        routeWhileDragging: true, 
        }).addTo(map);
    } 
    //Función que ejecuta mapa alternativo en caso de que dé error
    function error() {
    var map = L.map('map', {
        center: [42.16234,-8.62027],
        zoom: 17
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    //Ponemos la marca en el mapa
    let marker = L.marker([42.16231,-8.62027]).bindPopup('<h1> Panadería "Los Milagros"</h1>'+
    '<img class="imgMap" src="../assets/img/panaderia.jpg">'+
    '<h3> Dirección: Av. Río Guadaíra 8204-Sevilla</h3>'+
    '<h3>  Teléfono: 967 25 00 65</h3>').openPopup().addTo(map);
    }

  