$( function() {
  var $contentBrand = $('.contentBrand').isotope({
  	itemSelector: '.element-item',
  	layoutMode: 'fitRows'
  });
  $('.aBrand').click(function (event) {
  	var filterValue = $( this ).attr('data-filter');
    $contentBrand.isotope({ filter: filterValue });
  });  
  $('.main').flexslider({
    animation: "slides",
    controlNav: false,
  });
});
