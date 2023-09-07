export function extractMessageFromRawData(data) {
  const messages = [];
  data.choices.forEach((choice) => {
    messages.push(choice.message.content);
  });
  return messages;
}
