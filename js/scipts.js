// BUSINESS LOGIC

function fredBot(number) {
  if (number.length === 0) {
    return 0;
  }
  let botCount = 0;
  const numberArray = number.toString().split("");
  numberArray.forEach(function(number) {
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