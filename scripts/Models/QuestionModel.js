App.models.Question = Backbone.Model.extend({
    defaults: {
        "title": "Not set",
        "showNumber": true,
        "answers": [],
        "imageSrc": "",
        "showResultMode": false
    }
});

App.models.AnswerItem = Backbone.Model.extend({
    defaults: {
        "answer": "",
        "labelType": "text", // text | image
        "userAnswer": "",
        "label": "",
        "imageSrc": ""
    },

    isCorrectAnswer: function() {
        return this.get("answer") == this.get("userAnswer").toLowerCase().trim();
    }
});

App.collections.Questions = Backbone.Collection.extend({
    model: App.models.Question
});