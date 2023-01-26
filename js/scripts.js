// // BUSINESS LOGIC

function fredBot(input) {
  let fredBotArray = []
  for (let i = 1; i <= input; i +=1) {
    if (i.toString().includes(3)) {
      fredBotArray.push(" Won't you be my neighbor?");
    }
    else if (i.toString().includes(2)){
        fredBotArray.push(" Boop!");
    }
    else if (i.toString().includes(1)) {
      fredBotArray.push(" Beep!");
  }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray.toString();
  }

// USER INTERFACE LOGIC

function handleFormSubmission() {
  event.preventDefault();
  const botCount = document.getElementById("input").value;
  const botSpeak = fredBot(botCount);
  document.getElementById("robo-speech").innerText = botSpeak;
}

window.addEventListener("load", function() {
  document.querySelector("form#mr-roboger").addEventListener("submit", handleFormSubmission);
});