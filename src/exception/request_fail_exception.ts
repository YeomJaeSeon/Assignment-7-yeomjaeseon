import { InternalServerErrorException } from '@nestjs/common';
import { REQUEST_FAIL_EXCEPTION_MSG } from '../message/message';

export class RequestFailException extends InternalServerErrorException {
  constructor() {
    super(REQUEST_FAIL_EXCEPTION_MSG);
  }
}
