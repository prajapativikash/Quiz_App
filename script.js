document.addEventListener("DOMContentLoaded", () => {
   const startBtn = document.getElementById("start-btn")
   const nextBtn = document.getElementById("next-btn")
   const restartBtn = document.getElementById("restart-btn")
   const questionContainer = document.getElementById("question-container");
   const questionText = document.getElementById("question-text");
   const choiceList = document.getElementById("choice-list");
   const resultContainer = document.getElementById("result-container");
   const scoreDisplay = document.getElementById("score-display");

   const questions = [
      {
         question: "what is the capital of France?",
         choices: ["paris", "London", "Berlin", "Madrid"]
         ,
         answer: "paris"
      },
      {
         question: "what is the capital of France?",
         choices: ["paris", "London", "Berlin", "Madrid"]
         ,
         answer: "paris"
      },
   ]

   let currentQuestionIndex = 0
   let score = 0

   startBtn.addEventListener("click", startQuiz)

   nextBtn.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
         ShowQuestion()
      } else {
         showResult()

      }

   })

   restartBtn.addEventListener("click", () => {
      currentQuestionIndex = 0;
      score = 0;
      resultContainer.classList.add("hidden");
      startQuiz()
   }
   )
   function startQuiz() {
      startBtn.classList.add("hidden");
      resultContainer.classList.add("hidden");
      questionContainer.classList.remove("hidden");
      ShowQuestion();


   }

   function ShowQuestion() {
      nextBtn.classList.add("hidden");
      questionText.textContent = questions[currentQuestionIndex].question;
      choiceList.innerHTML = "" // clear previous choice
      questions[currentQuestionIndex].choices.forEach((choice) => {

         const li = document.createElement("li");
         li.textContent = choice;
         li.addEventListener("click", () => selectAnswer((choice)));
         choiceList.appendChild(li);
      });
   }

   function selectAnswer(choice) {
      const correctAnswer = questions[currentQuestionIndex].answer;
      if (choice === correctAnswer) {
         score++;
      }
      nextBtn.classList.remove("hidden")
   }


   function showResult() {
      questionContainer.classList.add("hidden");
      resultContainer.classList.remove("hidden");
      scoreDisplay.textContent = `${score} out of ${questions.length}`
   }



})