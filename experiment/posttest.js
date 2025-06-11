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
      question: "1.In Simulink, a linear system is one where:",
      answers: {
        a: "Output is not related to input",
        b: "Output increases with square of input",
        c: "Output changes proportionally with input",
        d: "Input is constant"
      },
      correctAnswer: "c"
    },
    {
      question: "2.Which Simulink block is commonly used to observe system output?",
      answers: {
        a: "Gain",
        b: "Scope",
        c: "Sum",
        d: "Product"
      },
      correctAnswer: "b"
    },
    {
      question: "3.What does a linearity test primarily analyze?",
      answers: {
        a: "Time delay between input and output",
        b: "Power consumption",
        c: "Input-output proportionality",
        d: "System frequency response"
      },
      correctAnswer: "c"
    },
    {
      question: "4.Which signal type is best suited for analyzing system linearity?",
      answers: {
        a: "Sine wave",
        b: "Pulse generator",
        c: "Random number",
        d: "Clock"
      },
      correctAnswer: "a"
    },
    {
      question: "5.If output does not scale directly with input, the system is:",
      answers: {
        a: "Linear",
        b: "Stable",
        c: "Non-linear",
        d: "Ideal"
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
