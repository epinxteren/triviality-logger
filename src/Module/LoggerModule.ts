import { Module } from 'triviality';
import { LoggerInterface } from '../LoggerInterface';

abstract class LoggerModule implements Module {

  public abstract logger(): LoggerInterface;

}

export { LoggerModule };
