export enum LogLevel {
  trace,
  debug,
  info,
  warn,
  error,
}

export interface LoggerInterface {
  trace(...message: any[]): void;
  debug(...message: any[]): void;
  info(...message: any[]): void;
  warn(...message: any[]): void;
  error(...message: any[]): void;

  log(level: LogLevel, ...message: any[]): void;
}
