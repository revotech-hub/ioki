App.views.Start =
    Backbone.View.extend({
        template: _.template($('#start-view-template').html()),
        el: '#main',
        events: {
            "click .js-start-exercises": "startExersices"
        },

        startExersices: function() {
            App.router.navigate("exercises/ex1/q1", { trigger: true });
        },

        render: function() {
            this.$el.html(this.template({}));
            return this;
        }
    });
