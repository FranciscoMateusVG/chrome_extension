chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Insert Before",
    contexts: ["all"],
    id: "ins_bef",
  });
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Replace",
    contexts: ["all"],
    id: "rep",
  });
});

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    title: "Insert After",
    contexts: ["all"],
    id: "ins_aft",
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  switch (info.menuItemId) {
    case "ins_bef":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            message: "injection",
            injection: "before",
          },
          function (response) {}
        );
      });
      break;

    case "rep":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            message: "injection",
            injection: "inside",
          },
          function (response) {}
        );
      });
      break;

    case "ins_aft":
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          {
            message: "injection",
            injection: "after",
          },
          function (response) {}
        );
      });
      break;

    default:
      break;
  }
});
