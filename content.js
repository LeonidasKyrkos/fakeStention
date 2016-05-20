(function(){
	
	var date = new Date();
	var day = date.getDay();
	
	if(day % 2) {
		
		var $img = $('img');
			
		$img.each(alter);
		
		function alter(i,el) {
			var rand = Math.random();
			if(rand <= 0.003) {
				$(el).prop('src','http://assets2.lfcimages.com/uploads/placeholders/splash_crest.png');
			}
		}
		
		var rand2 = Math.random();
		
		if(rand2 <= 0.07) {
			$('body').css({'-webkit-transform' : 'rotate(0.25deg)',
					'-moz-transform' : 'rotate(0.25deg)',
					'-ms-transform' : 'rotate(0.25deg)',
					'transform' : 'rotate(0.25deg)'});
		}
	}
	
	
})();