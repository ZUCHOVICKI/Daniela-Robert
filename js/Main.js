document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    options = {};
    var instances = M.Sidenav.init(elems, options);
});

function initMap() {
    // The location of Quinta Mompani 20.691457,-100.5195128
    const Qmompani = { lat: 20.691457, lng: -100.5195128 };
    // The map, centered at Quinta Mompani
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: Qmompani,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: Qmompani,
      map: map,
    });
  }
  
  window.initMap = initMap;