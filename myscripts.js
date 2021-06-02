function Computerplay(){
    num = Math.floor(Math.random()*3);

    switch(num){
        case 0:
            return "Rock";
        case 1:
            return "Scissors";
        case 2: 
            return "Paper";

    }

};

function play(human,computer){
    if (human.toUpperCase() == "ROCK"){
        switch(computer){
            case "Rock":
                return 0;
            case "Scissors":
                return 1;
            case "Paper": 
                return -1;
        }
    }

    if (human.toUpperCase() == "PAPER"){
        switch(computer){
            case "Rock":
                return 1;
            case "Scissors":
                return -1;
            case "Paper": 
                return 0;
        }
    }

    if (human.toUpperCase() == "SCISSORS"){
        switch(computer){
            case "Rock":
                return -1;
            case "Scissors":
                return 0;
            case "Paper": 
                return 1;
        }
    }

}

function game(){
    for (i=0; i<5; i++){
        playerselection = prompt("Please enter your choice");
        Computerselection = Computerplay();
        result = play(playerselection,Computerselection);
        //console.log(result);
        switch(result){
            case 0:
                console.log("Draw!");
                //console.log(i);
                break;
            case 1: 
                console.log("You Win!");
                //console.log(i);
                break;
            case -1:
                console.log("You Lose!");
                //console.log(i);
                break;
        }
    }
}

game();


