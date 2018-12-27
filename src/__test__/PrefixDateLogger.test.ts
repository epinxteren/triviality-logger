import { PrefixDateLogger } from '../PrefixDateLogger';
import { JestTestLogger } from '../JestTestLogger';

it('Should add date prefix', () => {

  const fixedDate = new Date();
  fixedDate.setTime(1545905753783);

  const testLogger = new JestTestLogger();
  const logger = new PrefixDateLogger(testLogger, undefined, () => fixedDate);

  logger.info('Test');

  expect(testLogger.info).toBeCalledWith('12/27/2018 11:15:53 AM', ':', 'Test');
});

it('Can add different date prefix', () => {

  const fixedDate = new Date();
  fixedDate.setTime(1545905753783);

  const testLogger = new JestTestLogger();
  const logger = new PrefixDateLogger(testLogger, 'LTS', () => fixedDate);

  logger.info('Test');

  expect(testLogger.info).toBeCalledWith('11:15:53 AM', ':', 'Test');
});
