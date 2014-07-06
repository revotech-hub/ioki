Router = Backbone.Router.extend({
    initialize: function (){
        this.progressMapView = new ProgressMapView({ collection: App.session.get("exercises") });
        this.questionView = new QuestionView();
    },
    routes: {
        "": "startView",
        "exercises/ex:exnum/q:qnum": "exercise",
        "exercises/question/next": "next"
    },
    startView: function () {
        var startView = new App.views.Start();
        startView.render();
    },
    exercise: function () {
        this.progressMapView.render();
        this.questionView.model = App.session.getCurrentQuestion();
        this.questionView.render();
    },
    next: function () {
        this.navigate("exercises/ex" + App.session.get("currentExercise") + "/q" + App.session.get("currentQuestion"), { trigger: true });
    }
});