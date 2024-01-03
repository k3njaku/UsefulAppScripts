function getURL(accountName, state, revenue) {
  var url = 'https://api.bing.microsoft.com/v7.0/search?q=' + accountName + '+' + state + '+' + revenue;
  var response = UrlFetchApp.fetch(url, {'headers': {'Ocp-Apim-Subscription-Key': 'fa6661f0b65c4712a0d9d570fdd349a4'}});
  var json = JSON.parse(response.getContentText());
  var companyURL = json.webPages.value[0].url;
  return companyURL;
}