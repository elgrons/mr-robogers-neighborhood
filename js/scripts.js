// // BUSINESS LOGIC

//this function only applies the rules to 1, 2, and 3, but does not account for nubers like 10, 11, 12, etc.//

// let fredBotArray = []
// function fredBot(input) {
//   for (let i = 1; i <= input; i +=1) {
//     console.log("index" + i);
//     console.log("array" + fredBotArray[i]);
//     if (i === 1) {
//       fredBotArray.push(" Beep!");
//     }
//     else if (i === 2) {
//         fredBotArray.push(" Boop!");
//     }
//     else if (i === 3) {
//       fredBotArray.push(" Won't you be my neighbor?");
//   }
//     else {
//         fredBotArray.push(i);
//     }
//   };
//   return fredBotArray.toString();
//   }

// push the above if else statements into a string and that should help clear up the issue- the below statements are only right in 'to string' the above are more correct for their logic - change if's and else if's, utilize the .includes and that should fix it all

//this function somehow puts everything as 1(beep)//
let fredBotArray = []
function fredBot(input) {1
  for (let i = 1; i <= input; i +=1) {
    console.log("index" + i);
    console.log("array" + fredBotArray[i]);
    let stringBot = fredBotArray.toString();
    if (stringBot.includes("3")) {
      fredBotArray.push("Won't you be my neighbor?");
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
  const botCount = document.getElementById("input").value;
  const botSpeak = fredBot(botCount);
  document.getElementById("robo-speech").innerText = botSpeak;
}

window.addEventListener("load", function() {
  document.querySelector("form#mr-roboger").addEventListener("submit", handleFormSubmission);
});

// ADD A CLEAR FORM EVENT HANDLER