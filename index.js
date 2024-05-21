let homepage = document.querySelector('.homepage');
let quizBoard = document.querySelector('.quizBoard');
let startButton = document.getElementById('startButton');
let question = document.getElementById('question');
let detail1 = document.querySelector('.detail1');
let detail2 = document.querySelector('.detail2');
let detail3 = document.querySelector('.detail3');
let detail4 = document.querySelector('.detail4');

startButton.addEventListener('click', function(){
    homepage.style.display = 'none';
    quizBoard.style.display = 'flex';
});

const questions = 
[   
    {
        "question" : "Q1. What is the capital of France?",
        "option1" : "Berlin",
        "option2" : "Madrid",
        "option3" : "Paris",
        "option4" : "Rome",
        "answer" : "option3"
    },
    {    
        "question" : "Q2. Who wrote the play Romeo and Juliet?",
        "option1" : "William Shakespeare",
        "option2" : "Charles Dickens",
        "option3" : "Mark Twain",
        "option4" : "Jane Austen",
        "answer" : "option1"
    },
    {     
        "question" : "Q3. What is the largest planet in our solar system?",
        "option1" : "Earth",
        "option2" : "Mars",
        "option3" : "Jupiter",
        "option4" : "Saturn",
        "answer" : "option3"
    },
    {
        "question" : "Q4. Which element has the chemical symbol 'O'?",
        "option1" : "Gold",
        "option2" : "Silver",
        "option3" : "Oxygen",
        "option4" : "Helium",
        "answer" : "option3"
    },
    {
        "question" : "Q5. What year did the Titanic sink?",
        "option1" : "1910",
        "option2" : "1912",
        "option3" : "1914",
        "option4" : "1916",
        "answer" : "option2"
    }
];
let arr = [0,1,2,3,4];

async function displayQuestions(remainingQuestions) {
    for (let i = 0; i < remainingQuestions.length; i++) {
        displayQuestion(remainingQuestions[i]);
        const clickedOption = await waitForUserInput();
        const parentOption = clickedOption.parentElement;
        if(parentOption.classList.contains('optionClass')){
            const opt = parentOption.classList[0];
            const child = parentOption.lastElementChild;
            console.log(child);
            if(opt == remainingQuestions[i].answer){
                console.log("matched");
                child.style.backgroundColor = 'green';
                child.style.color = 'white';
            }else{
                console.log("not matched");
                child.style.backgroundColor = 'red';
                child.style.color = 'white';
            }
            await delay(3000);
            child.style.backgroundColor = 'white';  
            child.style.color = 'black';          
        }else{
            i--;
        }
    }
}

function delay(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
let remainingQuestions = shuffle([...questions]);

function waitForUserInput() {
    return new Promise(resolve => {
        const clickHandler = function(e) {
            quizBoard.removeEventListener('click', clickHandler);
            resolve(e.target); // Resolve with the clicked option text
        };
        quizBoard.addEventListener('click', clickHandler, { once: true });
    });
}


function displayQuestion(questionObj) {
    question.innerText = questionObj.question;
    detail1.innerText = questionObj.option1;
    detail2.innerText = questionObj.option2;
    detail3.innerText = questionObj.option3;
    detail4.innerText = questionObj.option4;
}

displayQuestions(remainingQuestions);
