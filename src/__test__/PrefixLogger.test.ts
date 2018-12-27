import { JestTestLogger } from '../JestTestLogger';
import { PrefixLogger } from '../PrefixLogger';

it('Should add prefix', () => {

  const testLogger = new JestTestLogger();
  const logger = new PrefixLogger(testLogger, 'Hallo:');

  logger.trace('test trace');
  expect(testLogger.trace).toBeCalledWith('Hallo:', 'test trace');

});

it('Should add prefix from static constructor', () => {

  const testLogger = new JestTestLogger();
  const logger = PrefixLogger.with(testLogger, 'Hallo:');

  logger.trace('test trace');
  expect(testLogger.trace).toBeCalledWith('Hallo:', 'test trace');

});
