
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


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var options = {}
    var instances = M.Carousel.init(elems, {
      fullWidth: true,
      duration:200,
      indicators: true});

      
      
      
        
    

      // setInterval(myFunction, 2000);
  });

  const nextSlide=()=>{
    var elem = document.querySelector('.carousel')
    
    var instance = M.Carousel.getInstance(elem);
    if(instance.pressed==false){

      instance.next();
    }
  }

  setInterval(nextSlide,5000);