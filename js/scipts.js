// BUSINESS LOGIC

function fredBot(digit) {
  let botCount = 0;
  const digitArray = number.split(" ");
  digitArray.forEach(function(element) {
    botCount++;
  });
  return botCount;
}


// USER INTERFACE LOGIC

// function handleFormSubmission() {
//   event.preventDefault();
//   const passage = document.getElementById("text-passage").value;
//   const word = document.getElementById("word").value;
//   const wordCount = wordCounter(passage);
//   const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
//   document.getElementById("total-count").innerText = wordCount;
//   document.getElementById("selected-count").innerText = occurrencesOfWord;
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
// });