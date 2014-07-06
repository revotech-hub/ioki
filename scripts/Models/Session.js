App.models.Session = Backbone.Model.extend({
    defaults: {
        currentExercise: 1,
        currentQuestion: 1
    },

    getCurrentQuestion: function() {
        var questions = this.get("exercises")
            .at(this.get('currentExercise') - 1).get('questions');
        if (questions.length == 0)
            return null;
            
        return questions.at(this.get('currentQuestion') - 1);
    },

    hasNextExersice: function () {
        return this.get('currentExercise') < this.get("exercises").length;
    },
    hasNextQuestionInCurrentExercise: function () {
        return this.get('currentQuestion') < this.get("exercises").at(this.get('currentExercise') - 1).get('questions').length;
    },
    hasNextQuestion: function () {
        return this.hasNextExersice() || this.hasNextQuestionInCurrentExercise();
    },
    hasPrevExersice: function () {
        return this.get('currentExercise') > 1;
    },
    hasPrevQuestionInCurrentExercise: function () {
        return this.get('currentQuestion') > 1;
    },
    hasPrevQuestion: function () {
        return this.hasPrevExersice() || this.hasPrevQuestionInCurrentExercise();
    },

    nextQuestion: function () {
        if (this.hasNextQuestion() == false) {
            return;
        }
        if (this.hasNextQuestionInCurrentExercise()) {
            var q = this.get('currentQuestion') + 1;
            this.set('currentQuestion', q);
        } else {
            var ex = this.get('currentExercise') + 1;
            this.set('currentExercise', ex);
            this.set('currentQuestion', 1);
        }
        App.router.navigate("exercises/question/next", { trigger: true });
    },
    prevQuestion: function () {
        if (this.hasPrevQuestion() == false) {
            return;
        }
        if (this.hasPrevQuestionInCurrentExercise()) {
            var q = this.get('currentQuestion') - 1;
            this.set('currentQuestion', q);
        } else {
            var ex = this.get('currentExercise') - 1;
            this.set('currentExercise', ex);
            this.set('currentQuestion', this.get("exercises").at(ex-1).get('questions').length);
        }
        App.router.navigate("exercises/question/next", { trigger: true });
    }
});