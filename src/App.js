/**
 * OpenAI API boilerplate
 * 
 * @author Ganesh Rajan <github.com/rajan-ganesh>
 * @version 1.0.0
 */

import "./App.css";
import { fetchCompletions } from "./accessors";
import { extractMessageFromRawData } from "./utils";

function App() {
  handleEnterPress();

  return (
    <div className="App">
      Hello World !!!
      <input type="text" id="question" placeholder="Enter your Question" />
      <button type="button" id="submit-button" onClick={displayResults}>
        Ask ChatGPT!
      </button>
      <div id="response"></div>
    </div>
  );
}

async function displayResults() {
  try {
    const questionField = document.getElementById("question");
    const question = questionField.value;
    questionField.value = "";

    console.log("User entered question: ", question);
    const messages = extractMessageFromRawData(await fetchCompletions(question));
    console.log("Response after Transformation: ", messages[0]);

    document.getElementById("response").innerHTML = messages[0];
  } catch (err) {
    console.log(`Error while obtaining response: `, err);
  }
}

function handleEnterPress() {
  let canClick = true;
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && canClick) {
      document.getElementById("submit-button").click();
      canClick = false;
    }
  });

  document.addEventListener("keyup", function (e) {
    if (e.key === "Enter") {
      canClick = true;
    }
  });
}

export default App;
