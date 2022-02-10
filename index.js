window.addEventListener("load",() =>{
    let long;
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position) => {
            long =position.coords.longitude;
            lat =position.coords.latitude;
            const api= `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid={d068d4e8622f426341dc6980d3e37965}`
            fetch(api)
             .then((response) => {
                 return response.json();
             })
             .then(data =>{
                 console.log(data);
             })
        })
    }
})