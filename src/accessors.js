//Functions to access backend's APIs

import { InvalidInputException, RateLimitException } from "./exceptions";

export const fetchCompletions = async (question) => {
  try {
    checkInputValidity(question);

    const options = {
      method: "POST",
      body: JSON.stringify({ message: question }),
      headers: { "Content-Type": "application/json" },
    };

    const response = await fetch(
      process.env.REACT_APP_BACKEND_COMPLETIONS_URL,
      options
    );

    const data = await response.json();
    //console.log("Obtained Data from Backend Completions API: ", data);

    checkForErrors(data);

    return data;
  } catch (err) {
    throw err;
  }
};

function checkForErrors(data) {
  if (data.error) {
    console.log("OpenAI API returned an error: ", data.error);
    throw new RateLimitException(data.error.message, data.error.code);
  }
}

function checkInputValidity(question) {
  if (!question) {
    throw new InvalidInputException("Question is empty");
  }
}
