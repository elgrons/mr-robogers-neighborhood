// // BUSINESS LOGIC

function fredBot(input) {
  let fredBotArray = []
  for (let i = 0; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    if (i === 1) {
      fredBotArray.push("Beep!");
      console.log("1===TRUE");
    }
    else if (i === 2) {
        fredBotArray.push("Boop!");
    }
    else if (i === 3) {
      fredBotArray.push("Won't you be my neighbor?");
  }
    else {
        fredBotArray.push(i);
    }
  };
  return fredBotArray
  }



// USER INTERFACE LOGIC

function handleFormSubmission() {
  event.preventDefault();
  const rogersBotInput = document.getElementById("rogers-bot").value;
  // const word = document.getElementById("input").value;
  // const botSpeak = rogersBot(input);
  // document.getElementById("robo-speech").innerText = fredBot;


window.addEventListener("load", function() {
  document.querySelector("form#mr-roboger").addEventListener("submit", handleFormSubmission);
});
}