var baseUrl = 'https://api.github.com/'

function createGist(file_name, content, description, token){
  var headerToken = 'token ' + token
  var url = baseUrl + 'gists'
  var file = {}

  file[file_name] = { content: content }

  var data = JSON.stringify({
    files: file,
    description: description,
    public: true
  })

  $.ajax({
    url: 'https://api.github.com/gists',
    type: 'POST',
    dataType: 'json',
    beforeSend: function(xhr) {
      xhr.setRequestHeader("Authorization", "token " + token);
    },
    data: JSON.stringify(data)
  }).done(function(response) {
    myGists(response.owner.login, token);
  });
};

function myGists(username, token){
  var headerToken = 'token ' + token
  var url = baseUrl + 'users/' + username + '/gists'
  $.ajax({
    type: 'GET',
    url: url,
    headers: {
      Authorization: headerToken
    },
    success: function(data) {
      return data
    }
  })
};

function bindCreateButton() {

  $('#create-a-gist').on('submit', function(event) {
    event.preventDefault()
    var token = $('#personalToken').val()
    var file_name = $('#file_name').val()
    var description = $('#description').val()
    var content = $('#content').val()

    var gistPromise = createGist(file_name, content, description, token)

    gistPromise.then(function(gists) {
      for( var i = 0; i < gists.length; i++) {
        $('#display-gists').append('<div class="gist"><h4><a href="' + gists[i].html_url + '" target="_blank">' + gists[i].description + '</a></h4></div>')
      }
    })
  })
};

function bindShowButton() {
  $('#show-gists').on('submit', function(event) {
    event.preventDefault()
    var token = $('#personalToken2').val()
    var username = $('#username').val()

    var myGistPromise = myGists(username, token)

    myGistPromise.then(function(gists) {
      for( var i = 0; i < gists.length; i++) {
        $('#display-gists').append('<div class="gist"><h4><a href="' + gists[i].html_url + '" target="_blank">' + gists[i].description + '</a></h4></div>')
      }
    })
  })
}

$(document).ready(function(){
  bindCreateButton()
  bindShowButton()
});
