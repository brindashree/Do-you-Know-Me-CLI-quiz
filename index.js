var readlineSync = require("readline-sync");

var user = readlineSync.question("Hi! What is your name ? ");
console.log("Welcome " + user + " lets play !");
var score = 0;
questionOne = {
  question : "Which is Brinda's fav color ? ",
  answer: "blue",
};
questionTwo = {
  question : "What will she choose ? dog or cat ?  ",
  answer: "dog",
};
questionThree= {
  question : "What will she choose ? Tea or Coffee ?  ",
  answer: "tea",
};
questionFour= {
  question : "What will she choose when it comes to movie genre ? mystery or drama ? ",
  answer: "mystery",
};
questionFive= {
  question : "which music instrument does she wish to learn ? guitar or piano ?  ",
  answer: "guitar",
};

function quiz(question,answer){
  var userans = readlineSync.question(question);
  if(userans.toLowerCase() == answer.toLowerCase()){
    console.log("You are right!" );
    score++;
    console.log("Current Score : " + score);
    console.log("-------------");
  }
  else{
    console.log(" ohoo wrong!");
    score--;
     console.log("Current Score : " + score);
    console.log("-------------");
  }
}
var questions = [questionOne,questionTwo,questionThree,questionFour,questionFive];
for(var i=0;i<questions.length;i++){
  quiz(questions[i].question,questions[i].answer);
}
if(score == 5){
  console.log("Yayyy !! you know Brinda very well!! .. Send her a screenshot!")
}else{
  console.log("Your total score:  " + score);
  console.log("Lets send a screenshot to Brinda now :))")
}




