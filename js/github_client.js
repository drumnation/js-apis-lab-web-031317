var username = 'drumnation'
var token = 'fc3a53d37d9cd474a86cc5c9b078ed5d62599dba'

//define functions here
var createGist = function(file_name, content, description, token) {


  $.ajax({
    url: 'https://api.github.com/gists/',
    type: 'POST',
    dataType: 'json',
    headers: {
      Authorization: token
    }
  })
};

// var myGists = function (username, token) {
//   $.ajax({
//     url: `https://api.github.com/users/drumnation/gists`,
//     type: 'GET',
//     dataType: 'json',
//     headers: {
//       Authorization: 'fc3a53d37d9cd474a86cc5c9b078ed5d62599dba'
//     }
//   })
// };
var myGists = function(event) {
  event.preventDefault()
  console.log("top of myGists")
  $.ajax({
    url: `https://api.github.com/users/drumnation/gists`,
    type: 'GET',
    dataType: 'json',
    headers: {
      Authorization: 'fc3a53d37d9cd474a86cc5c9b078ed5d62599dba'
    },
    success: function(data) {
      debugger
    }
  })
};
var myCompareCommits = function() {
  console.log("top of myGists")
  $.ajax({
    url: `https://api.github.com/repos/drumnation/javascript-lazy-loader-web-031317/compare/learn-co-students:master...drumnation:master`,
    dataType: 'json',
    headers: {
      Authorization: 'fc3a53d37d9cd474a86cc5c9b078ed5d62599dba'
    },
    success: function(data) {
      console.log('data')
    }
  })
};

var showGists = function () {
  let gists = myGists.map(function(gist, i, myGists) {
    return `<div></div>`
  })
}

var bindCreateButton = function() {
  // call functions here

};

$(document).ready(function(){
  $('input#create-gist').on('click', myGists )

});
