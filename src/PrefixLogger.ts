import { LoggerInterface, LogLevel } from './LoggerInterface';
import { AbstractLogLevelLogger } from './AbstractLogLevelLogger';

export class PrefixLogger extends AbstractLogLevelLogger implements LoggerInterface {

  public static with(logger: LoggerInterface,
                     prefix: string): LoggerInterface {
    return new this(logger, prefix);
  }

  constructor(private readonly logger: LoggerInterface,
              private readonly prefix: string) {
    super();
  }

  public log(level: LogLevel, ...message: any[]) {
    this.logger.log.apply(this.logger, [level, this.prefix, ...message]);
  }

}
