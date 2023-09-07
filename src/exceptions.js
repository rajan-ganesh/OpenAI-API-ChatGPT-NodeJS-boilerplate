export class RateLimitException extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = "RateLimitException";
  }
}

export class InvalidInputException extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidInputException";
  }
}
