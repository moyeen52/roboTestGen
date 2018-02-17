jQuery.noConflict();
(function($) { 
  $(function() {
    // shorthand logging function
  	var l = function(message) {
      console.log('Log:', message);
    }

    // Initializing the settings
    settings = new Settings($, 'form.settings');
    

    // Activate tabbing
    $('#main-nav a').click(function (e) {
      e.preventDefault()
      $(this).tab('show')
    });

    /**
     * Add your production codehere.
     */ 


    
  });
})(jQuery);
