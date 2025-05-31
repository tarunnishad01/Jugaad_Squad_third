/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
  {
    question: "1. In Simulink, the linearity test is performed to determine:", 
    answers: {
      a: "The stability of the system",
      b: "The input-output relationship of the system",
      c: "The speed of the system",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "2. If the output does not increase proportionally with the input, the system is called:", 
    answers: {
      a: "Linear",
      b: "Non-linear",
      c: "Stable",
      d: "None of the above"
    },
    correctAnswer: "b"
  },

  {
    question: "3. What is the purpose of the 'Scope' block in Simulink?", 
    answers: {
      a: "To generate input signals",
      b: "To perform calculations",
      c: "To view output signals",
      d: "To save data"
    },
    correctAnswer: "c"
  },

  {
    question: "4. Which types of input signals are suitable for linearity testing in Simulink?", 
    answers: {
      a: "Sine wave",
      b: "Step signal",
      c: "Ramp signal",
      d: "All of the above"
    },
    correctAnswer: "d"
  },

  {
    question: "5. What is a characteristic of a non-linear system in Simulink modeling?", 
    answers: {
      a: "Superposition principle holds",
      b: "Output changes proportionally with input",
      c: "Output has a complex relationship with input",
      d: "All options are correct"
    },
    correctAnswer: "c"
  }
];





/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////