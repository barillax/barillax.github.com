$(document).ready(function() {
  $('#topnav').localScroll();

  // slick html5 custom data trick for image rollover from http://www.selfcontained.us/2008/03/08/simple-jquery-image-rollover-script/
  $(function() {
      $('img[data-hover]').hover(function() {
          $(this).attr('tmp', $(this).attr('src')).attr('src', $(this).attr('data-hover')).attr('data-hover', $(this).attr('tmp')).removeAttr('tmp');
      }).each(function() {
          $('<img />').attr('src', $(this).attr('data-hover'));
      });;
  });
  
  // make all links open in new tab
  $('a[href^="http"]').attr("target","_blank");
})