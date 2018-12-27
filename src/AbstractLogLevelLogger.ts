import { LoggerInterface, LogLevel } from './LoggerInterface';

export abstract class AbstractLogLevelLogger implements LoggerInterface {
  public trace(...message: any[]): void {
    this.log(LogLevel.trace, ...message);
  }

  public debug(...message: any[]): void {
    this.log(LogLevel.debug, ...message);
  }

  public info(...message: any[]): void {
    this.log(LogLevel.info, ...message);
  }

  public warn(...message: any[]): void {
    this.log(LogLevel.warn, ...message);
  }

  public error(...message: any[]): void {
    this.log(LogLevel.error, ...message);
  }

  public abstract log(type: LogLevel, ...message: any[]): void;

}
