import { LoggerInterface, LogLevel } from './LoggerInterface';
import { AbstractLogLevelLogger } from './AbstractLogLevelLogger';
import moment from 'moment';

export class PrefixDateLogger extends AbstractLogLevelLogger implements LoggerInterface {

  constructor(private readonly logger: LoggerInterface,
              private readonly format: string = 'L LTS',
              private readonly now: () => Date = () => new Date()) {
    super();
  }

  public log(level: LogLevel, ...message: any[]): void {
    this.logger.log(level, ...[this.formatDate(), ':', ...message]);
  }

  private formatDate(): string {
    return moment(this.now()).format(this.format);
  }

}
