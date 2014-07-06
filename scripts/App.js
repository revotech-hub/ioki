(function() {
    var session = dataUploader.getSession();

    App.session = session;
    var router = new Router();
    App.router = router;
    
    Backbone.history.start();
})();