import { HttpException, HttpStatus } from '@nestjs/common';

export class BadReqeust extends HttpException {
  constructor(message?: string) {
    super({ message: message || '请求有误' }, HttpStatus.BAD_REQUEST);
  }
}

export class UnAuthorized extends HttpException {
  constructor(message?: string) {
    super(message || '未认证', HttpStatus.UNAUTHORIZED);
  }
}

export class Forbidden extends HttpException {
  constructor(message?: string) {
    super(message || '权限不足', HttpStatus.FORBIDDEN);
  }
}

export class NotFound extends HttpException {
  constructor(message?: string) {
    super(message || '记录不存在', HttpStatus.NOT_FOUND);
  }
}

export class MethodNotAllowed extends HttpException {
  constructor(message?: string) {
    super(message || '访问方法出错', HttpStatus.METHOD_NOT_ALLOWED);
  }
}

export class RequestTooLarge extends HttpException {
  constructor(message?: string) {
    super(
      message || '请求主体过大',
      HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
    );
  }
}

export class ServerError extends HttpException {
  constructor(message?: string) {
    super(message || '服务器错误', HttpStatus.INTERNAL_SERVER_ERROR);
  }
}
