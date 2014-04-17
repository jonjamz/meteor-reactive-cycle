Package.describe({
  summary: "Reactively cycle through elements or sets of elements in the DOM."
});

Package.on_use(function(api) {
  api.use(["deps", "jquery", "underscore", "jquery-visible"], ["client"]);
  api.export && api.export('ReactiveCycle');
  api.add_files("lib/reactive-cycle.js", ["client"]);
});

Package.on_test(function(api) {

});
