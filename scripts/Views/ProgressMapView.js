var ProgressMapView = Backbone.View.extend({
    template: _.template($('#progress-map-container-template').html()),
    el: '#progress-map-container',
    events: {
        "click .js-prev": "showPrev",
        "click .js-next": "showNext",
    },
    
    showPrev: function() {
        App.session.prevQuestion();
    },
    showNext: function () {
        App.session.nextQuestion();
    },

    render: function () {
        this.$el.html(this.template({
            items: this.collection.toJSON(),
            currentExercise: App.session.get("currentExercise"),
            currentQuestion: App.session.get("currentQuestion")
        }));
        return this;
    }
});