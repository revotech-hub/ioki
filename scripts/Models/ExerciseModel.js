App.models.Exercise = Backbone.Model.extend({
    defaults: {
        "name": "Not named",
        "questions": [] 
    }
});


App.collections.Exercises = Backbone.Collection.extend({
    model: App.models.Exercise,
    author: function () { },
    coordinates: function () { },
    allowedToEdit: function (account) {
        return true;
    }
});