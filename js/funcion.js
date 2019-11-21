$(document).ready(function () {
    $('.carousel').carousel({ padding: 120, indicators: true, shift:120,  numVisible: 3, duration: 2000});
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.pushpin-demo-nav').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top
        });
    });
    $(".dropdown-trigger").dropdown({ coverTrigger: false });
    $(".dropdown-trigger").dropdown({ hover: true });
    $('.tabs').tabs();
    $('.videoexp').carousel({ padding: 120, indicators: true });
});

