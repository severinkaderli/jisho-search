/**
 * Creating the context menu.
 */
chrome.contextMenus.create({
    type: "normal",
    id: "jishor-search",
    title: "Search on jisho.org: %s",
    contexts: [
        "selection"
    ],
    onclick: search,
});

/**
 * The Functions to open the search results in a new tab.
 */
function search(info, tab) {
    chrome.tabs.create({
        url: "http://jisho.org/search/" + info.selectionText
    })
}
