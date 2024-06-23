let homepage = document.querySelector('.homepage');
let quizBoard = document.querySelector('.quizBoard');
let startButton = document.getElementById('startButton');
let question = document.getElementById('question');
let detail1 = document.querySelector('.detail1');
let detail2 = document.querySelector('.detail2');
let detail3 = document.querySelector('.detail3');
let detail4 = document.querySelector('.detail4');
let scoreAndProg = document.querySelector('.scoreAndProgress');
let progressBar = document.querySelector('.progress-bar');
let scoreB = document.querySelector('.scoreBoard');
let selectQuestions = 0;

startButton.addEventListener('click', function(){
    waitForQues();
});

async function waitForQues(){
    homepage.style.display = 'none';
    quizBoard.style.display = 'flex';
    scoreAndProg.style.display = 'flex'
    await waitForInput();
    console.log(selectQuestions);
    progressBar.innerText = '0/'+selectQuestions;
    displayQuestions(remainingQuestions);
}


const questions = [
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
    },
    {
        "question" : "Q6. What is the capital of Japan?",
        "option1" : "Seoul",
        "option2" : "Tokyo",
        "option3" : "Beijing",
        "option4" : "Bangkok",
        "answer" : "option2"
    },
    {
        "question" : "Q7. Who painted the Mona Lisa?",
        "option1" : "Vincent van Gogh",
        "option2" : "Pablo Picasso",
        "option3" : "Leonardo da Vinci",
        "option4" : "Claude Monet",
        "answer" : "option3"
    },
    {
        "question" : "Q8. What is the hardest natural substance on Earth?",
        "option1" : "Gold",
        "option2" : "Iron",
        "option3" : "Diamond",
        "option4" : "Platinum",
        "answer" : "option3"
    },
    {
        "question" : "Q9. Who was the first president of the United States?",
        "option1" : "Thomas Jefferson",
        "option2" : "Abraham Lincoln",
        "option3" : "George Washington",
        "option4" : "John Adams",
        "answer" : "option3"
    },
    {
        "question" : "Q10. What is the smallest country in the world?",
        "option1" : "Monaco",
        "option2" : "San Marino",
        "option3" : "Liechtenstein",
        "option4" : "Vatican City",
        "answer" : "option4"
    },
    {
        "question" : "Q11. What is the tallest mountain in the world?",
        "option1" : "K2",
        "option2" : "Mount Everest",
        "option3" : "Kangchenjunga",
        "option4" : "Lhotse",
        "answer" : "option2"
    },
    {
        "question" : "Q12. Who developed the theory of relativity?",
        "option1" : "Isaac Newton",
        "option2" : "Galileo Galilei",
        "option3" : "Nikola Tesla",
        "option4" : "Albert Einstein",
        "answer" : "option4"
    },
    {
        "question" : "Q13. What is the largest ocean on Earth?",
        "option1" : "Atlantic Ocean",
        "option2" : "Indian Ocean",
        "option3" : "Arctic Ocean",
        "option4" : "Pacific Ocean",
        "answer" : "option4"
    },
    {
        "question" : "Q14. In which year did the Berlin Wall fall?",
        "option1" : "1987",
        "option2" : "1988",
        "option3" : "1989",
        "option4" : "1990",
        "answer" : "option3"
    },
    {
        "question" : "Q15. What is the longest river in the world?",
        "option1" : "Amazon River",
        "option2" : "Nile River",
        "option3" : "Yangtze River",
        "option4" : "Mississippi River",
        "answer" : "option2"
    },
    {
        "question" : "Q16. Who is known as the father of computers?",
        "option1" : "Alan Turing",
        "option2" : "Bill Gates",
        "option3" : "Steve Jobs",
        "option4" : "Charles Babbage",
        "answer" : "option4"
    },
    {
        "question" : "Q17. What is the chemical symbol for gold?",
        "option1" : "Go",
        "option2" : "Au",
        "option3" : "Ag",
        "option4" : "Gd",
        "answer" : "option2"
    },
    {
        "question" : "Q18. Who wrote '1984'?",
        "option1" : "George Orwell",
        "option2" : "Aldous Huxley",
        "option3" : "J.K. Rowling",
        "option4" : "Ernest Hemingway",
        "answer" : "option1"
    },
    {
        "question" : "Q19. What is the speed of light?",
        "option1" : "300,000 km/s",
        "option2" : "150,000 km/s",
        "option3" : "200,000 km/s",
        "option4" : "100,000 km/s",
        "answer" : "option1"
    },
    {
        "question" : "Q20. Who discovered penicillin?",
        "option1" : "Marie Curie",
        "option2" : "Alexander Fleming",
        "option3" : "Louis Pasteur",
        "option4" : "Gregor Mendel",
        "answer" : "option2"
    }
];

let totalq = selectQuestions;
let arr = [0,1,2,3,4];

async function displayQuestions(remainingQuestions) {
    let score = 0;
    console.log("loop ke baha");
    for (let i = 0; i < selectQuestions; i++) {
        console.log("inside x " +i);
        displayQuestion(remainingQuestions[i], i+1);
        const clickedOption = await waitForUserInput();
        const parentOption = clickedOption.parentElement;
        if(parentOption.classList.contains('optionClass')){
            const opt = parentOption.classList[0];
            const child = parentOption.lastElementChild;
            let c = remainingQuestions[i].answer.charAt(6);
            const toColor = document.querySelector('.detail'+c);

            console.log(child);
            if(opt == remainingQuestions[i].answer){
                console.log("matched");
                child.style.backgroundColor = '#00ff11';
                child.style.transition = '0.3s ease-in-out';
                score+=10;
                // child.style.color = 'white';
            }else{
                console.log("not matched");
                child.style.backgroundColor = '#ff1500';                
                child.style.transition = '0.3s ease-in-out';
                // child.style.color = 'white';
                await delay(1000);
                toColor.style.transition = '0.3s ease-in-out';
                toColor.style.backgroundColor = '#00ff11';
                score -= 5;
                // toColor.style
            }
            await delay(3000);
            progressBar.style.width = ((i+1) * (100/selectQuestions)) + '%' ;
            progressBar.innerText = (i+1) + '/' + selectQuestions;
            scoreB.innerText = score;
            toColor.style.backgroundColor = 'white';
            child.style.backgroundColor = 'white';  
            child.style.color = 'black';   
                   
        }else{
            i--;
        }
        console.log(score);
    }
    displayEnd(score);
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

function waitForInput() {
    return new Promise(resolve => {
        selectQuestions = prompt("Enter Number of Question to Attempt out of 20");
        resolve(selectQuestions);
    });
}

questions.length
function displayQuestion(questionObj, i) {
    let ques = questionObj.question;
    let modQues = ques.charAt(0) + i + ques.slice(2);
    question.innerText = modQues;
    detail1.innerText = questionObj.option1;
    detail2.innerText = questionObj.option2;
    detail3.innerText = questionObj.option3;
    detail4.innerText = questionObj.option4;
}

function displayEnd(score){
    console.log("vjnd" + score);
    quizBoard.style.display = 'none';
    scoreAndProg.style.display = 'none'
    let endWindow = document.querySelector('.endWindow');
    let scoreCard = document.querySelector('.scoreCard');
    endWindow.style.display = 'flex';
    scoreCard.innerText = score;
}