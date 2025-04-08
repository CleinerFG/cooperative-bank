const { serverErrorsLogger } = require('../lib/utils/loggers');

class BaseError extends Error {
  #options;
  #status;

  constructor(options = {}, status = 500) {
    super();
    this.#options = options;
    this.#status = status;
  }

  get #responseData() {
    if (this.#status >= 400 && this.#status < 500) return this.#options;

    serverErrorsLogger.error(this.#options.err);
    return {
      error: 'server',
    };
  }

  sendResponse(res) {
    return res.status(this.#status).json(this.#responseData);
  }
}

module.exports = BaseError;
