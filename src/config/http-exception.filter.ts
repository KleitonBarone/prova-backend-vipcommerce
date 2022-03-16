import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { ApiError } from '../util/api-error.model';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    const timeOfError = new Date()
      .toISOString()
      .split('T')
      .join(' ')
      .slice(0, -5);

    const exceptionReturn = (exception, status, message) => {
      const errorReporter = {
        statusCode: status,
        error: message,
        timestamp: timeOfError,
        path: request.url,
      };

      response.status(status).send({
        code: errorReporter.statusCode,
        error: errorReporter.error,
      });
    };

    const ApiErrorHandler = (exception) => {
      return exceptionReturn(
        exception,
        exception.code,
        exception.error || exception.message || 'Unknown API error',
      );
    };

    const genericErrorHandler = (exception) => {
      return exceptionReturn(
        exception,
        exception.response.status || exception.response.statusCode || 500,
        exception.response.data
          ? exception.response.data.message
          : exception.response.message ||
              exception.response.statusText ||
              'Unknown HTTP Error',
      );
    };

    switch (true) {
      case exception instanceof ApiError:
        ApiErrorHandler(exception);
        break;

      case exception.response instanceof ApiError:
        ApiErrorHandler(exception.response);
        break;

      case exception instanceof TypeError:
        exceptionReturn(exception, 400, 'Bad Request');
        break;

      case exception instanceof Error:
        genericErrorHandler(exception);
        break;

      case exception.response.data instanceof Object:
        exceptionReturn(
          exception,
          exception.response.status,
          exception.response.data.message
            ? exception.response.data.message
            : exception.message || 'Unknown Object Error',
        );
        break;
    }
  }
}
