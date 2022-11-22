function startMap() {
    const Detroit = { 
        lat: 42.3314,  
        lng: -83.0458};  
    const map = new google.maps.Map( 
      document.getElementById('map'), 
      {  
        zoom: 10, 
        center: Detroit  
      } 
    );  
  }
  

  // const DetroitMarker = new google.maps.Marker({
  //   position: {
  //     lat: Detroit.lat,
  //     lng: Detroit.lng
  //   },
  //   map: map,
  //   title: "Detroit"
  // });


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {
  
      const center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      console.log('center: ', center)
    }, function () {
  
      console.log('Error in the geolocation service.');
    });
  } else {
  
    console.log('Browser does not support geolocation.');
  }


  startMap();






