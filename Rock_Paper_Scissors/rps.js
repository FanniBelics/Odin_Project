/*
rock - 0
paper - 1
scissors - 2
*/

let compDecision = 0;
let playerDecision = 0;

function compPick()
{
    compDecision=Math.floor((Math.random()*10)%3);
    console.log("CompDecision: "+compDecision);
}

function compare()
{
    if(compDecision == playerDecision)
    {
        alert("It's a tie");
    }
    else if ((playerDecision+1)%3 == compDecision)
    {
        alert("You lost!");
    }
    else
    {
        alert("Yöu won!");
    }
}

function pickRock()
{
    compPick();
    playerDecision=0;
    document.getElementById("d").innerHTML=playerDecision; 
    compare();
}

function pickPaper()
{
    compPick();
    playerDecision=1;
    document.getElementById("d").innerHTML=playerDecision;
    compare();
}

function pickScissors()
{
    compPick();
    playerDecision=2;
    document.getElementById("d").innerHTML=playerDecision;
    compare();
}