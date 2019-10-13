$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.pushpin-demo-nav').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top
        });
    });
    $('.slider').slider();
});

