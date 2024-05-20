let homepage = document.querySelector('.homepage');
let quizBoard = document.querySelector('.quizBoard');
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', function(){
    homepage.style.display = 'none';
    quizBoard.style.display = 'flex';
    // console.log("button clicked");
});


