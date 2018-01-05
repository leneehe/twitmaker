// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener('DOMContentLoaded', function(){
  var form = document.querySelector('#new_tweet'),
      tweetBtn = form.querySelector('#create-tweet'),
      tweetMsg = form.querySelector('#tweet_message'),
      ul = document.querySelector('ul.tweets');
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    $.ajax({
      url: form.getAttribute('action'),
      method: form.getAttribute('method'),
      data: $(tweetMsg).serialize(),
      dataType: 'html',
    }).done(function(data) {
      console.log(data)
      $(ul).prepend( data)
    })
  })
})
