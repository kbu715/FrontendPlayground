const quizData = [
  {
    question: 'Which language runs in a web browser?',
    a: 'Java',
    b: 'C',
    c: 'Python',
    d: 'JavaScript',
    correct: 'd',
  },
  {
    question: 'What does CSS stand for?',
    a: 'Central Style Sheets',
    b: 'Cascading Style Sheets',
    c: 'Cascading Simple Sheets',
    d: 'Cars SUVs Sailboats',
    correct: 'b',
  },
  {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Hypertext Markdown Language',
    c: 'Hyperloop Machine Language',
    d: 'Helicopters Terminals Motorboats Lamborginis',
    correct: 'a',
  },
  {
    question: 'What year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1994',
    d: 'none of the above',
    correct: 'b',
  },
  {
    question: 'What is the most popular language?',
    a: 'go',
    b: 'typescript',
    c: 'ruby',
    d: 'none of the above',
    correct: 'c',
  },
  {
    question: 'What is superset of Javascript?',
    a: 'ruby',
    b: 'python',
    c: 'Typescript',
    d: 'c++',
    correct: 'c',
  },
  {
    question: 'Which is not framework?',
    a: 'react',
    b: 'vue',
    c: 'angular',
    d: 'mysql',
    correct: 'd',
  },
  {
    question: 'What is not backend framework?',
    a: 'react',
    b: 'django',
    c: 'express',
    d: 'laravel',
    correct: 'a',
  },
  {
    question: 'Who made Reactjs?',
    a: 'microsoft',
    b: 'facebook',
    c: 'google',
    d: 'apple',
    correct: 'b',
  },
  {
    question: 'What is react framework?',
    a: 'nextjs',
    b: 'nestjs',
    c: 'expressjs',
    d: 'none of the above',
    correct: 'a',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = parseInt(Math.random() * quizData.length);
let score = 0;
let count = 0;
loadQuiz();

function loadQuiz() {
  console.log(currentQuiz);
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    quizData.splice(currentQuiz, 1);
    console.log(quizData);
    count++;
    currentQuiz = parseInt(Math.random() * quizData.length);

    if (count < 4) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
                <h2>You answered ${score}/4 questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `;
    }
  }
});
