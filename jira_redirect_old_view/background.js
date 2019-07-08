chrome.webRequest.onBeforeRequest.addListener(
  details => {
    if (details.url.includes(".atlassian.net/browse/") && !details.url.includes("?oldIssueView=true"))
      return { redirectUrl: `${details.url}?oldIssueView=true`};
  },
  { urls: ["https://*.atlassian.net/*"] },
  ["blocking"]
);
