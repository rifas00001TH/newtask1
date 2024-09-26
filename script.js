//selecting elements
var inputbox=document.getElementById("inputbox")
var result=document.getElementById("result")
var guesscount=document.getElementById("guess")
var noofguess=3

// random num
var randomnum=Math.floor(Math.random()*10)+1
 if( randomnum>5)
{
    randomnum=randomnum-5
 }

function checknum()
{
    if(inputbox.value == randomnum)
    {
       alert("You guess is Right")
       result.textContent="you are right"
    }
    else
    {
        noofguess=noofguess-1
        if(noofguess == 0)
        { 
            alert("You lost"+randomnum)

        }
        guesscount.textContent = "Available Gusess :"+noofguess
        result.textContent="you are rong"
    }

}