(function( $ ){
  $.fn.innerLabels = function( ) {
    return this.each(function() {        
	var $this = $(this)
// Initialise all form elements with class
	$this.each(function() {
	var lngth = $(this).val().length;
	if(lngth > 0){
		$(this).parent().children('label').hide();
	}else{
		$(this).parent().children('label').show();
	};
	});
// onfocus event - clears label
	$this.focus(function() {
	$this.parent().children('label').hide();
	});
// onblur event re-enstates label if length of value is zero.
	$this.blur(function() {
	var lngth = $this.val().length;	
	if(lngth > 0){
		$this.parent().children('label').hide();
	}else{
		$this.parent().children('label').show();
	};
	});
    });
  };
})( jQuery );


