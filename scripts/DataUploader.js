var dataUploader = {
    getSession: function() {

        var answer1 = new App.models.AnswerItem({
            labelType: "image",
            answer: "foggy",
            imageSrc: "images/ex1/1.png"
        });
        var answer2 = new App.models.AnswerItem ({
            labelType: "image",
            answer: "raining",
            imageSrc: "images/ex1/2.png"
        });
        var answer3 = new App.models.AnswerItem ({
            labelType: "image",
            answer: "cloudy",
            imageSrc: "images/ex1/3.png"
        });
        var answer4 = new App.models.AnswerItem ({
            labelType: "image",
            answer: "sunny",
            imageSrc: "images/ex1/4.png"
        });
        var answer5 = new App.models.AnswerItem ({
            labelType: "image",
            answer: "windy",
            imageSrc: "images/ex1/5.png"
        });
        var answer6 = new App.models.AnswerItem ({
            labelType: "image",
            answer: "snowing",
            imageSrc: "images/ex1/6.png"
        });

        var answerItem = [];
        answerItem.push(answer1);
        answerItem.push(answer2);
        answerItem.push(answer3);
        answerItem.push(answer4);
        answerItem.push(answer5);
        answerItem.push(answer6);

        var question1 = new App.models.Question({
            title: "Label the weather symbols.",
            imageSrc: "images/ex1/question.jpg"
        });

        question1.set("answers", answerItem);
        

        var answer2_1 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "2",
            label: "enjoying a field trip"
        });
        var answer2_2 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "3",
            label: "working on computers"
        });
        var answer2_3 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "4",
            label: "taking a test"
        });
        var answer2_4 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "1",
            label: "doing a project"
        });
        var answer2_5 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "5",
            label: "giving a presentation"
        });
        var answer2_6 = new App.models.AnswerItem ({
            labelType: "text",
            answer: "6",
            label: "practicing yoga"
        });

        var answerItems2 = [];
        answerItems2.push(answer2_1);
        answerItems2.push(answer2_2);
        answerItems2.push(answer2_3);
        answerItems2.push(answer2_4);
        answerItems2.push(answer2_5);
        answerItems2.push(answer2_6);

        var question2 = new App.models.Question({
            title: "What school activities do you see on the picture?",
            imageSrc: "images/ex2/question2.jpg"
        });

        question2.set("answers", answerItems2);
       
        
        var questions = new App.collections.Questions([question1, question2]);

        var exercise1 = new App.models.Exercise({ name: "", questions: questions });
        var exercise2 = new App.models.Exercise();
        var exercise3 = new App.models.Exercise();

        var excercises = new App.collections.Exercises([exercise1, exercise2, exercise3]);

        return new App.models.Session({ exercises: excercises });
    }
};