'use strict';

Github.projectsArray = [];

function Github (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

// using the template
Github.prototype.toHtml = function() {
  // var $newGithub = $('myprojectsList-template').clone();
  var myTemplate = $('#my-template').html();
  var compiled = Handlebars.compile(myTemplate);
  // $('#articles').append(compile(this));
  return compiled(this);
};

rawData.forEach(function(projectObject) {
  Github.projectsArray.push(new Github(projectObject));
});

Github.projectsArray.forEach(function(Github) {
  $('#projects').append(Github.toHtml());
});
