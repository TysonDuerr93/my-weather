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
 $('#cheney i').addClass( 'icon-' + weather.code );

    
      // Entire weather object
      console.log(weather);
    },
    error: function(error) {
      // Show if weather cannot be retreived
    }
  
  });


