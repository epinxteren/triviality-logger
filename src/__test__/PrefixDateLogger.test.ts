import { PrefixDateLogger } from '../PrefixDateLogger';
import { JestTestLogger } from '../JestTestLogger';

it('Should add date prefix', () => {

  const momentMock = {
    format: jest.fn().mockReturnValue('12/27/2018 11:15:53 AM'),
  };

  const testLogger = new JestTestLogger();
  const logger = new PrefixDateLogger(testLogger, undefined, () => momentMock as any);

  logger.info('Test');

  expect(testLogger.info).toBeCalledWith('12/27/2018 11:15:53 AM', ':', 'Test');
  expect(momentMock.format).toBeCalledWith('L LTS');
});

it('Can add different date prefix', () => {

  const momentMock = {
    format: jest.fn().mockReturnValue('11:15:53 AM'),
  };

  const testLogger = new JestTestLogger();
  const logger = new PrefixDateLogger(testLogger, 'LTS', () => momentMock as any);

  logger.info('Test');

  expect(testLogger.info).toBeCalledWith('11:15:53 AM', ':', 'Test');
  expect(momentMock.format).toBeCalledWith('LTS');
});
