import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class ErrorHandlerFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx?.getResponse?.() as Response;
    const status = exception?.getStatus?.();
    const { statusCode, message } = exception.getResponse?.() as Record<
      string,
      any
    >;
    const Body = {
      code: statusCode ?? status,
      message: message instanceof Array ? message[0] : message,
    };
    response.status(status).json(Body);
  }
}
