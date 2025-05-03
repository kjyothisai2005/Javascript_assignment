const score={wins:0,loses:0,ties:0};

function playGame(player){

    let randomnum=Math.random();
    let computermove='';
    console.log(randomnum);
    if (randomnum>=0 && randomnum<=1/3){
        computermove='rock';
    }
    else if(randomnum>=1 && randomnum<=4/3 && randomnum%2==0){
        computermove='scissor';
    }
    else{
        computermove='paper';
    }
    let result;

    if(computermove=='rock' && computermove!=player){
        if(player=='scissor'){
        result='rock wins';
        score.loses+=1;
    }
        else if (player=='paper'){
            result='paper wins';
            score.wins+=1;
        }
        else{
        result='Tie';
        score.ties+=1;
        }
    }
    else if(computermove=='scissor' && computermove!=player ){
        if (player=='paper'){
        result='scissor wins';
        score.loses+=1;
        }
        else if(player=='rock'){
            result='rock wins';
            score.wins+=1;
        }
        else{
        result='Tie';
        score.ties+=1;
        }
    }
        
    else if (computermove=='paper' && computermove!=player ){
        if(player=='rock'){
        result='paper wins';
        score.loses+=1;
        }
        else if (player=='scissor'){
            score.wins+=1;
        result='scissor wins';
        }
        else {
        result='Tie';
        score.ties+=1;
        }
    }
    else{
        result='Tie';
        score.ties+=1;
    }
    alert(`Player move:${player}\nComputer move:${computermove}\n${result}\nWins:${score.wins} Loses:${score.loses} Ties:${score.ties}`);
}