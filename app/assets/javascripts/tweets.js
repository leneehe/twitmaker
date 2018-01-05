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
      dataType: 'json',
    }).done(function(data) {
      console.log(data.created_at)
      var li = document.createElement('li'),
          p = document.createElement('p'),
          time = document.createElement('time');
      li.className = 'tweet';
      p.innerText = data.message
      time.innerHTML = data.created_at.toLocaleString("en-US")
      li.append(p);
      li.append(time)
      console.log(li)
      $(ul).prepend(li)
    }).fail(function() {
      console.log('failed to tweet')
    })
  })
})
