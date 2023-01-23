// // BUSINESS LOGIC

// function fredBot(input) {
//   let fredBotArray = []
//   for (let i = 0; i <= input; i +=1) {
//     console.log("index" + i);
//     console.log("array" + fredBotArray[i]);
//     if (i === 1) {
//       fredBotArray.push("Beep!");
//       console.log("1===TRUE");
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
//   return fredBotArray
//   }

  function fredBot(input) {
    let fredBotArray = []
    for (let i = 1; i <= input; i +=1) {
      console.log("index" + i);
      console.log("array" + fredBotArray[i]);
      let stringBot = fredBotArray.toString();
      if (stringBot.includes("3")) {
          fredBotArray.push("Won't you be my neighbor?");
        console.log("3===TRUE");
      }
      else if (stringBot.includes("2")) {
          fredBotArray.push("Boop!");
      }
      else if (stringBot.includes("1")) {
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
  const rogersBotInput = document.getElementById("rogers-bot").value;
  let fredMcfeelyBot = fredBot(rogersBotInput);
  document.getElementById("robo-speech").innerText = fredMcfeelyBot;


window.addEventListener("load", function() {
  document.querySelector("form#mr-roboger").addEventListener("submit", handleFormSubmission);
});
}

// HOW TO SAY DISPLAY FREDBOT- to use innerText I need to turn my FredBot output into a string!