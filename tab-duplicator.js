chrome.commands.onCommand.addListener(function(command) {
  switch(command) {
    case 'duplicate-tab':
      duplicateTab();
      break;
  }
});

function duplicateTab() {
  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    active_tab = tabs.find(function(t) { return t.active == true });

    chrome.tabs.duplicate(active_tab.id);
  });
}
