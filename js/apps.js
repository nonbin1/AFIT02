
 var $ = jQuery.noConflict();
  $(document).ready(function pricefeed() {
    
	$.ajax({
        url: 'http://db.flutx.com/DFIT02/json_getdata.php',
        	type: "GET",
			
    dataType: "jsonp",
    async:false,
        success: function(data){ 
			
		   for( var i = 0; i < 60; i++) {
				$('#price-'+eval(i+1)).text(data[i].data);
			}
			$('#update').text(data[60].data);
			setTimeout(pricefeed, 60*60*1000);
        },
        error: function(error){
			 ErrorFunction();
        }
    	});
  });
  
