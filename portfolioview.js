'use strict';

$(function() {

    // Project visibility --> click actions
  $('#projects').hide(); // starts off hidden... ?  we want to defualt the about me... likely...?
  $('#blog').hide();

  $('.projects-button').click(function() {
    $('#about-me').hide();
    $('#blog').hide();
    $('#projects').show();
  });

  $('.about-me').click(function() {
    $('#projects').hide();
    $('#blog').hide();
    $('#about-me').show();
  });

  $('.blog-button').click(function() {
    $('#projects').hide();
    $('#about-me').hide();
    $('#blog').show();
  });
});
