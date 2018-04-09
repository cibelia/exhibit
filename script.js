$(document).ready(() => {
  $(".nav").on("click", () => {
    $(".dropdown").toggle();
  });

  $(".nav").on("click", () => {
    $(".title-bar").toggle();
  });

  $('#filter a').click(function() {
    if($(this).attr('rel')) {
        $('#browse-category .row .column img').hide().filter('[class = "' + $(this).attr('rel') + '"]').show();
    } else {
        $('#gallery-image').show();
    }
    
    return false;
  });
  


});

/** 
$('#filter a').click(function() {
  if($(this).attr('rel')) {
      $('img').hide().filter('[class="' + $(this).attr('rel') + '"]').show();
  } else {
      $('img').show();
  }
  
  return false;
})
})
**/

