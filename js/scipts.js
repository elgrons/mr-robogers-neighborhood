// BUSINESS LOGIC

// Test one:
// function fredBotNeighb(number) {
//   return 1;
// }

// Test Two:
function fredBotNeighb(number) {
  let fredBot = 0;
  const fredBotArray = number.split(" ");
  fredBotArray.forEach(function(word) {
    fredBot++;
  });
  return fredBot;
}

// USER INTERFACE LOGIC

// function handleFormSubmission() {
//   event.preventDefault();
//   const input = document.getElementById("text-bot").value;
//   const word = document.getElementById("word").value;
//   const wordCount = wordCounter(input);
//   const occurrencesOfWord = numberOfOccurrencesInText(word, input);
//   document.getElementById("total-count").innerText = wordCount;
//   document.getElementById("selected-count").innerText = occurrencesOfWord;
// }

// window.addEventListener("load", function() {
//   document.querySelector("form#word-counter").addEventListener("submit", handleFormSubmission);
// });