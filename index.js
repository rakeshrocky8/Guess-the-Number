var guess_number =document.getElementById("guess_number")
var result=document.getElementById("statement")
var random = Math.floor(Math.random()*10+1)
var score = document.getElementById("score")
var total_score = 10


function guess(){
    var g_number = guess_number.value
    if( g_number == random){
        result.textContent="Your Right ;)"
        alert("You Won ;)")
    }
    if(total_score == 0){
        score.textContent="Your Score : "+total_score
        result.textContent="Your LOST!"
    }
    else{
        total_score=total_score-1
        score.textContent="Your Score : "+total_score
        result.textContent="Your Worng try again ;)"
    }
}
