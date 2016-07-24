$(document).ready(function() {    
  
  // start slideshow
  slideShow(4000);

});

function slideShow(speed) {

  // li
  $('ul.pics').append('<li id="pics-caption" class="caption"><div class="pics-caption-container"><p></p></div></li>');

  // opacity is 0
  $('ul.pics li').css({opacity: 0.0});
  
  // first pic
  $('ul.pics li:first').css({opacity: 1.0}).addClass('show');
  
  // first pic caption
  $('#pics-caption p').html($('ul.pics li.show').find('img').attr('alt'));
    
  // show caption
  $('#pics-caption').css({opacity: 0.6, bottom:0});
  
  // gallery function run slideshow  
  var timer = setInterval('gallery()',speed);
  
  // pause when hovering over pic
  $('ul.pics').hover(
    function () {
      clearInterval(timer); 
    },  
    function () {
      timer = setInterval('gallery()',speed);     
    }
  );  
}

function gallery() {

  //first
  var current = ($('ul.pics li.show')?  $('ul.pics li.show') : $('#ul.pics li:first'));

  //maintain speed
  if(current.queue('fx').length == 0) {

    // next image
    var next = ((current.next().length) ? ((current.next().attr('id') == 'pics-caption')? $('ul.pics li:first') :current.next()) : $('ul.pics li:first'));
      
    // next caption
    var desc = next.find('img').attr('alt');  
  
    // set fade
    next.css({opacity: 0.0}).addClass('show').animate({opacity: 1.0}, 1000);
    
    // hide then display caption
    $('#pics-caption').slideToggle(300, function () { 
      $('#pics-caption p').html(desc); 
      $('#pics-caption').slideToggle(500); 
    });   
  
    // hide image
    current.animate({opacity: 0.0}, 1000).removeClass('show');

  }
}