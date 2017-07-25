'use strict';

GithubRepository.projectsArray = [];

function GithubRepository (rawDataObj) {
  this.author = rawDataObj.author;
  this.authorUrl = rawDataObj.authorUrl;
  this.title = rawDataObj.title;
  this.category = rawDataObj.category;
  this.body = rawDataObj.body;
  this.publishedOn = rawDataObj.publishedOn;
}

// using the template
GithubRepository.prototype.toHtml = function() {
  var myTemplate = $('#my-template').html();
  var compiled = Handlebars.compile(myTemplate);
  return compiled(this);
};

rawData.forEach(function(projectObject) {
  GithubRepository.projectsArray.push(new GithubRepository(projectObject));
});

GithubRepository.projectsArray.forEach(function(GithubRepository) {
  $('#projects').append(GithubRepository.toHtml());
});

// GithubRepository.projectsArray.fetchAll = function (){
//   if (localStorage.rawData) {
//     GithubRepository.projectsArray.loadAll(JSON.parse(localStorage.getItem('rawData')));
//   } else {
//     $.getJSON('./rawdata.json')
//     .then(function(data) {
//       localStorage.setItem('rawdata', JSON.stringify(data)); //Something here is not working//
//       GithubRepository.projectsArray.loadAll(JSON.parse(localStorage.getItem('rawdata')));
//     }),
//     console.log('error');
//   }
// };


//Yay it's working!//
$(document).ready(function (){
  console.log('I\'m calling stuff...!');
  GithubRepository.projectsArray.fetchAll = function (){
    if (localStorage.rawData) {
      // GithubRepository.projectsArray.loadAll
      JSON.parse(localStorage.getItem('rawData'));
      console.log('local storage exists');
    } else {
      $.getJSON('./rawdata.json')
      .then(function(data) {
        localStorage.setItem('rawData', JSON.stringify(data));
        GithubRepository.projectsArray.loadAll(JSON.parse(localStorage.getItem('rawData')));
        console.log('let\'s put stuff in local storage now');
        return;
      }),
      console.log('error, if local storage is there... wtf bro?');
    }
    console.log('error past the error');
  };
  console.log('error inception');
  GithubRepository.projectsArray.fetchAll();
});
