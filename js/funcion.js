$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.pushpin-demo-nav').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top
        });
    });
    $('.slider').slider();
    $(".dropdown-trigger").dropdown({coverTrigger:false});
    $(".dropdown-trigger").dropdown({ hover: true });
});

