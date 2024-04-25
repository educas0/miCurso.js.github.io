// Inicializar el mapa
function initMap() {
    // Coordenadas de la ubicación de la empresa
    const empresa = { lat: 38.183710490345305, lng: -3.6866438930394105 };
    const usuario = { lat: 38.13728911480242, lng: -3.6491170320408144 };
    const centroMapa = { lat: 38.1510668677685, lng: -3.6636016008432875 };

    // Crear el mapa
    const map = new google.maps.Map(document.getElementById("google-map"), {
        zoom: 12,
        center: centroMapa,
    });

    // Marcador de la ubicación de la empresa
    const marker = new google.maps.Marker({
        position: empresa,
        map: map,
        title: "Empresa mía",
    });

        // Marcador de la ubicación del usuario
        const marker2 = new google.maps.Marker({
            position: usuario,
            map: map,
            title: "tu casa",
        });

        // Servicio de direcciones
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer({
        map: map,
    });

    // Configurar la solicitud de direcciones
    const request = {
        origin: usuario,
        destination: empresa,
        travelMode: google.maps.TravelMode.DRIVING, // Modo de viaje (puede ser DRIVING, WALKING, BICYCLING o TRANSIT)
    };

    // Calcular la ruta
    directionsService.route(request, function(result, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
        } else {
            console.error("Error al calcular la ruta:", status);
        }
    });    

}

