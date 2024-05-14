fetch("https://raw.githubusercontent.com/LOLnuhuh/bookmarkletsforme/main/all-bookmarklets.js").then(function(response) {
  response.text().then(function(text) {
    eval(text);
  });
});
