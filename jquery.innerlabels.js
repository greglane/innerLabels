(function($) {
    $.fn.innerLabels = function() {
        var $self = this;
        var hideElements = function() {
            $self.each(function() {
                var lngth = $(this).val().length;
                if (lngth > 0) {
                    $(this).siblings('label').hide();
                } else {
                    $(this).siblings('label').show();
                };
            });  
        };
        hideElements();
        return $self.focus(function() {
            $(this).siblings("label").hide();
        }).bind("blur keyup", hideElements);
    };
})(jQuery);
