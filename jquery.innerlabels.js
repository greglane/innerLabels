(function($) {
    $.fn.innerLabels = function() {
        return this.each(function() {
            var label = $(this).siblings('label');
            if($(this).val()) label.hide();
            $(this).bind({
                focus: function() { label.hide(); },
                blur: function() { if(!$(this).val()) label.show(); },
                change: function() { if(!$(this).val()) label.show(); }
            });
        });
    }
})(jQuery);
