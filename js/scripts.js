// First, load jQuery (required)
// jQuery 2.2.2 loaded via `index.html`

// Second, load Semantic UI JS (required)
// @codekit-prepend "semantic.js";

// Third, Add to Homescreen (optional)
// @codekit-prepend "add-to-homescreen.js";

// Third, load any plugins (optional)
// @codekit-prepend "plugins.js";

// My Scripts

// Active tabs
$('.menu .item')
  .tab();

// Get Cheney weather

$.simpleWeather({
    location: '99004',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#cheney .city').text(weather.city);
      $('#cheney .temp').text(weather.temp);
      // Display icon  
 $('#cheney i').addClass( 'icon-' + weather.code );    

        
        //Get forecast
        $("#d1 .day").text(weather.forecast[1].date);
        $("#d1 .temp").text(weather.forecast[1].high);
    $('#di i').addClass( 'icon-' + weather.forecast[1].code);
        
        
        //Add custom body class
        if ( weather.code >= 26 && weather.code <= 30 ){
                        $("body").removeClass();

            $("body").addClass("bg-1");
        
        }

        
    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Get Spokane weather

$.simpleWeather({
    location: 'Spokane,WA',
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('#spokane .city').text(weather.city);
      $('#spokane .temp').text(weather.temp);
      // Display icon
     $('#spokane i').addClass( 'icon-' + weather.code );
      
        // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });

// Get Geo Location
// Check for GeoLocation Support on Browser
if ('geolocation' in navigator) {

   $('.geo button').show(); 

} else {
  
  $('.geo button').hide();
  $('.geo').prepend('<p>Geolocation Not Supported</p>');

}
// Get geolocated weather
var getWeather = function(location) {
    
   $.simpleWeather({
    location: location,
    woeid: '',
    unit: 'f',
    success: function(weather) {
      
      // Display Data
      $('.geo .temp').text(weather.temp);
      $('.geo .city').text(weather.city);
    // Display Icon
      $('.geo i').addClass( 'icon-' + weather.code );    
        
      // Entire weather object
      console.log();
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });
    
};



