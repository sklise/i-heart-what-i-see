// function likeSomething(e) {
  // chrome.tabs.executeScript(null, {code:"alert('hi')"})
// }

// chrome.browserAction.onClicked.addListener(likeSomething);

chrome.tabs.onUpdated.addListener(function(tab) {
  chrome.tabs.executeScript(tab.id, {file: "content.js"});
})
