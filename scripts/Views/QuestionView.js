var QuestionView =
    Backbone.View.extend({
        template: _.template($('#question-template').html()),
        el: '#main',
        events: {
            "click .js-check": "check"
        },
        
        check: function() {
            var showResultMode = this.model.get("showResultMode");
            
            if (!showResultMode) {
                this._setUserAnswers();
            }
            
            this.model.set("showResultMode", !showResultMode);
            this.render();
        },
        render: function() {
            if (this.model == null) {
                this.$el.html("no question info");
                return this;
            }
            
            this.$el.html(this.template({ model: this.model, session: App.session }));
            return this;
        },
        _setUserAnswers: function () {
            var els = this.$el.find("input.js-answer");

            var answers = this.model.get("answers");
                
            for (var i = 0; i < els.length; i++) {
                answers[i].set("userAnswer", $(els[i]).val());
            }
        }
    });