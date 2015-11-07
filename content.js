window.onscroll = function() {
  var allTweets = document.getElementsByClassName('tweet')
  for (i = 0; i < allTweets.length; i++) {
    if (findPos(allTweets[i])[1] > document.body.scrollTop && findPos(allTweets[i])[1] <= document.body.scrollTop+window.innerHeight - 100) {
      if (!allTweets[i].className.match(/favorited/)) {
        fireEvent(allTweets[i].getElementsByClassName('js-actionFavorite')[0], 'click')
      }
    }
  }
}

// http://www.quirksmode.org/js/findpos.html
function findPos(obj) {
  var curleft = curtop = 0

  if (obj.offsetParent) {
    do {
      curleft += obj.offsetLeft
      curtop += obj.offsetTop
    } while (obj = obj.offsetParent)
  }

  return [curleft, curtop]
}

// http://jehiah.cz/a/firing-javascript-events-properly via
// http://stackoverflow.com/questions/143747/is-it-possible-to-trigger-a-links-or-any-elements-click-event-through-javasc
function fireEvent(element, event) {
   var evt = document.createEvent("HTMLEvents")
   evt.initEvent(event, true, true ) // event type,bubbling,cancelable
   evt.preventDefault()
   return !element.dispatchEvent(evt)
}
