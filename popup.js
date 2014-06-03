console.log('i\'m popup.js');

// chrome.browserAction.onClicked.addListener(function(tab) {
// 	chrome.tabs.executeScript(null, {
// 		code: "document.body.bgColor='red';window.alert('fuck');"
// 	});
// });
chrome.tabs.executeScript(null, {
	code: "document.head.appendChild(document.createElement('script'))"
});

