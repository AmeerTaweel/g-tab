chrome.runtime.onInstalled.addListener(() => {
    console.log("gTab has been installed.");
    chrome.storage.sync.set({groups: []}, () => {
      console.log("gTab has been initialized.");
    });
});