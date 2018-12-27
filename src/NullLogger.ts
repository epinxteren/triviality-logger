import { LogLevel } from './LoggerInterface';
import { AbstractLogLevelLogger } from './AbstractLogLevelLogger';

export class NullLogger extends AbstractLogLevelLogger {
  public log(_type: LogLevel, ..._message: any[]): void {
    // log nothing.
  }
}
