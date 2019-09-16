const choices=document.querySelectorAll('.choice');
const score=document.getElementById('score');
const result=document.getElementById('result');
const restart=document.getElementById('restart');
const modal =document.querySelector('.modal');

const scoreboard={
    player:0,
    computer:0
}

function play(e){
    restart.style.display = 'inline-block';
    const playerchoice = e.target.id;
    const computerchoice=getcomputerchoice();
    const winner=getwinner(playerchoice,computerchoice);
     showwinner(winner,computerchoice);
}

function getcomputerchoice()
{
    const rand=Math.random();
    if(rand<0.34)
    {
        return 'rock';
    }
    else if(rand<= 0.67)
    {
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function getwinner(p, c) {
    if (p === c) {
      return 'draw';
    } else if (p === 'rock') {
      if (c === 'paper') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'paper') {
      if (c === 'scissors') {
        return 'computer';
      } else {
        return 'player';
      }
    } else if (p === 'scissors') {
      if (c === 'rock') {
        return 'computer';
      } else {
        return 'player';
      }
    }
  }

  function showwinner(winner,computerchoice)
  {
      if(winner==='player')
      {
          scoreboard.player++;
          result.innerHTML=`<h1 class="text-win">You Win</h1>
                            <i class="fas fa-hand-${computerchoice} fa-10x"></i>
                            <p>computer chose <strong>${computerchoice}</strong></p>`;
      }
      else if(winner==='computer')
      {
        scoreboard.computer++;
        result.innerHTML=`<h1 class="text-lose">You lose</h1>
                          <i class="fas fa-hand-${computerchoice} fa-10x"></i>
                          <p>computer chose <strong>${computerchoice}</strong></p>`;
      }
      else
      {
        result.innerHTML=`<h1>It's a Draw</h1>
        <i class="fas fa-hand-${computerchoice} fa-10x"></i>
        <p>computer chose <strong>${computerchoice}</strong></p>`;
      }

      score.innerHTML=
`<p> Player: ${scoreboard.player} </p>
                <p> Computer: ${scoreboard.computer} </p>` ;

         modal.style.display='block'   ;    

  }

function clearmodal(e)
{
    if(e.target==modal)
    {
        modal.style.display='none';
    }
}

function restartgame()
{
    scoreboard.player = 0;
    scoreboard.computer =0;
    score.innerHTML=`
        <p>Player:0</p>
        <p>Computer:0</p>`

}

choices.forEach(choice => choice.addEventListener('click',play));
window.addEventListener('click',clearmodal);
restart.addEventListener('click',restartgame)