
  let score = JSON.parse(localStorage.getItem('score'));

  if(score === null) {
    score = {
      wins:0,
      loses:0
    };
  }

  function computerToss() {
    
    const button = document.querySelector('.coin-flip');
    const coin = document.querySelector('.coin');
    
    const randomNumber = Math.random();
    let result = '';
    if(randomNumber < 0.5) {
      result = 'heads'
      coin.setAttribute("class", "coin animate-heads");
    } else if(randomNumber >= 0.5 && randomNumber < 1) {
      result = 'tails'
      coin.setAttribute("class", "coin animate-tails");
    }
    return result;
  }
  const array = [5,4,3,2,1];
  let isAutoPlaying = false;
  let intervalId;
  function autoPlay() {
    
    
    
      if(!isAutoPlaying) {

        let currentIndex = 0;

        function printArrayElementWithDelay() {
          if (currentIndex < array.length) {
            document.querySelector('.game-starts').innerHTML=`Game Starts in ${array[currentIndex]} Seconds`;
            currentIndex++;
            setTimeout(printArrayElementWithDelay, 800);
          }
          else {
            document.querySelector('.game-starts').innerHTML="Game is in Auto Play Mode";
          }
        }

        setTimeout(() => {
          printArrayElementWithDelay();
        }, 800);


        intervalId = setInterval(function() {
          const playerMove = computerToss();
          playerGuess(playerMove);
        },5000);
        isAutoPlaying = true;
      } else {
        document.querySelector('.game-starts').innerHTML='';
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }

  
  let highestStreak = JSON.parse(localStorage.getItem("highestStreak"));



  let winStreak = JSON.parse(localStorage.getItem("winStreak"));
  document.body.addEventListener('keydown',(event) => {
    if(event.key === 'h' || event.key === 'H') {
      playerGuess('heads');
    } else if(event.key === 't' || event.key ==='T') {
      playerGuess('tails');
    }
  })
  function playerGuess(guess) {
    eraseData();
    const result = computerToss();
    
    setTimeout(() => {
    if(result === guess) {
        score.wins +=1;
        winStreak+=1;
        document.querySelector('.js-result').innerHTML = "Hurray! Your Guess is right";
      } else {
        score.loses +=1;
        winStreak = 0;
        document.querySelector('.js-result').innerHTML = `Oops Your Guess is Wrong`;
      }
      localStorage.setItem('score',JSON.stringify(score));
     
      document.querySelector('.js-wins-loses').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}`;
      document.querySelector('.win-streak').innerHTML = `Win Streak: ${winStreak}`;
      if(winStreak >=highestStreak) {
        highestStreak = winStreak;
        document.querySelector('.win-streak').innerHTML = `Win Streak: ${winStreak} <img src ="flammable-32.png" class= "flame">`;
      }
      document.querySelector('.highest-streak').innerHTML = `Highest Win Streak: ${highestStreak} <img src ="flammable-32.png" class= "flame">`;
      
    }, 3000);

    setTimeout(() => {
      const coin = document.querySelector('.coin');
      coin.classList.add('rotate');
      
    }, 3500);
    localStorage.setItem(('winStreak'), JSON.stringify(winStreak));
    localStorage.setItem(('highestStreak'), JSON.stringify(highestStreak));
  }
  
    
  function eraseData() {
    document.querySelector('.js-result').innerHTML =  '';
  }

  function backHome() {
    setTimeout(() => {
      window.location.href="MainPage.html";
    }, 500);
  }
  let notClick = false;
  function giveInstructions() {
    if(!notClick) {
      document.querySelector('.js-instruct').innerHTML= 
    `<li>Press 'H' to select Heads </li>
    <li>Press 'T' to select Tails </li>`
    notClick = true;

    }
    else {
      document.querySelector('.js-instruct').innerHTML = "Tap to see instructions";
      notClick=false;
    }
  }
