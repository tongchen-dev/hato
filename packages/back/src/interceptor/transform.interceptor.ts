import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((payload) => {
        if (payload instanceof Object && Reflect.has(payload, 'message')) {
          const { message, data } = payload;
          return {
            code: 200,
            message,
            data: data || [],
          };
        } else {
          return {
            code: 200,
            message: '操作成功',
            data: payload,
          };
        }
      }),
    );
  }
}
