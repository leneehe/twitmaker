// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
function formatAMPM(date) {
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12 ? 'pm' : 'am';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10 ? '0'+ minutes : minutes;

    // the time string
    var time = hours + ':' + minutes + ' ' + ampm;

    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \d{1,2}/);

    //the result
    return match[0] + ', ' + time;
}

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
      time.innerHTML =  formatAMPM(new Date(data.created_at))
      li.append(p);
      li.append(time)
      console.log(li)
      $(ul).prepend(li)
    }).fail(function() {
      console.log('failed to tweet')
    })
  })
})
