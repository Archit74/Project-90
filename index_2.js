user1 = localStorage.getItem("username1");
user2 = localStorage.getItem("username2");
user_1_score=0;
user_2_score=0;
document.getElementById("player1_name").innerHTML=user1+":";
document.getElementById("player2_name").innerHTML=user2+":";
document.getElementById("player1_score").innerHTML=user_1_score;
document.getElementById("player2_score").innerHTML=user_2_score;
document.getElementById("player_question").innerHTML="question turn"+user1;
document.getElementById("player_answer").innerHTML="answer turn"+user2;
function send(){
number1=document.getElementById("number1").value;
number2=document.getElementById("number2").value;
correct_answer=parseInt(number1)*parseInt(number2);
question_number = "<h4>" + number1 + " X "+ number2 +"</h4>";
 input_box = "<br>Answer : <input type='text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row=question_number+input_box+check_button;
document.getElementById("output").innerHTML=row;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}