function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4"; 
  
    // Retrieve the user's answer
    const selectedAnswer = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedAnswer ? selectedAnswer.value : null;
  
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
  
    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  }
  
  // Add an event listener to the Submit Answer button
  const submitButton = document.getElementById("submit-answer");
  submitButton.addEventListener("click", checkAnswer);
