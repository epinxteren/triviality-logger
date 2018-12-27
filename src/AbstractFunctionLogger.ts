import { LoggerInterface, LogLevel } from './LoggerInterface';

export abstract class AbstractFunctionLogger implements LoggerInterface {
  public abstract trace(...message: any[]): void;
  public abstract debug(...message: any[]): void;
  public abstract info(...message: any[]): void;
  public abstract warn(...message: any[]): void;
  public abstract error(...message: any[]): void;

  public log(level: LogLevel, ...message: any[]): void {
    switch (level) {
      case LogLevel.trace:
        this.trace(...message);
        break;
      case LogLevel.debug:
        this.debug(...message);
        break;
      case LogLevel.info:
        this.info(...message);
        break;
      case LogLevel.warn:
        this.warn(...message);
        break;
      case LogLevel.error:
        this.error(...message);
        break;
      default:
        throw new Error(`Log level "${level}" not supported`);
    }

  }

}
