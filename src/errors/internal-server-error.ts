import { CustomError } from './custom-error';

export class InternalServerError extends CustomError {
  statusCode = 500;
  reason = 'Internal server error.';

  constructor() {
    super('Internal server error.');

    Object.setPrototypeOf(this, InternalServerError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
