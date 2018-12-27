import { LoggerInterface, LogLevel } from './LoggerInterface';
import { AbstractLogLevelLogger } from './AbstractLogLevelLogger';

export class FromLogLevelLogger extends AbstractLogLevelLogger implements LoggerInterface {

  constructor(private readonly logger: LoggerInterface, private logFrom: LogLevel) {
    super();
  }

  public log(level: LogLevel, ...message: any[]): void {
    if (this.logFrom > level) {
      return;
    }
    this.logger.log.apply(this.logger, [level, ...message]);
  }

}
