import { JestTestLogger } from '../JestTestLogger';
import { CollectionLogger } from '../CollectionLogger';
import { LogLevel } from '../LoggerInterface';

it('Should call multiple loggers', () => {

  const testLogger1 = new JestTestLogger();
  const testLogger2 = new JestTestLogger();
  const logger = new CollectionLogger([
    testLogger1,
    testLogger2,
  ]);

  logger.info('Hallo');
  expect(testLogger1.info).toBeCalledWith('Hallo');
  expect(testLogger2.info).toBeCalledWith('Hallo');

  testLogger1.mockReset();
  testLogger2.mockReset();

  logger.log(LogLevel.error, 'World');
  expect(testLogger1.error).toBeCalledWith('World');
  expect(testLogger2.error).toBeCalledWith('World');

});
