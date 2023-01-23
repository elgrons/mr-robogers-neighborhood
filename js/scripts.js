// // BUSINESS LOGIC

//this function only applies the rules to 1, 2, and 3, but does not account for nubers like 10, 11, 12, etc.//

// function fredBot(input) {
//   let fredBotArray = []
//   for (let i = 0; i <= input; i +=1) {
//     console.log("index" + i);
//     console.log("array" + fredBotArray[i]);
//     if (i === 1) {
//       fredBotArray.push("Beep!");
//     }
//     else if (i === 2) {
//         fredBotArray.push("Boop!");
//     }
//     else if (i === 3) {
//       fredBotArray.push("Won't you be my neighbor?");
//   }
//     else {
//         fredBotArray.push(i);
//     }
//   };
//   return fredBotArray.toString();
//   }

//this function somehow puts everything as 1(beep)//
  function fredBot(input) {
    let fredBotArray = []
    for (let i = 1; i <= input; i +=1) {
      console.log("index" + i);
      console.log("array" + fredBotArray[i]);
      let stringBot = fredBotArray.toString();
      if (stringBot.includes(3)) {
          fredBotArray.push("Won't you be my neighbor?");
          console.log("3===TRUE");
      }
      else if (stringBot.includes(2)) {
          fredBotArray.push("Boop!");
      }
      else if (stringBot.includes(1)) {
          fredBotArray.push("Beep!");
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
  let botSpeak = fredBot(botCount);
  document.getElementById("input").innerText = botSpeak;
}

window.addEventListener("load", function() {
  document.querySelector("form#mr-roboger").addEventListener("submit", handleFormSubmission);
});