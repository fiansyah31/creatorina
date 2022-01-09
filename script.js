
$(function () {
$(document).scroll(function () {
 var $nav = $(".navbar-creatorina");

 $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
});
