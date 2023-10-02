/**
 * Unit tests for the functions in `0-constant.js`
 */
import { taskFirst, getLast, taskNext } from './0-constants.js';

test('taskFirst returns the correct value', () => {
  const result = taskFirst();
  expect(result).toBe('I prefer const when I can.');
});

test('getLast returns the correct value', () => {
  const result = getLast();
  expect(result).toBe(' is okay');
});

test('taskNext returns the correct value', () => {
  const result = taskNext();
  expect(result).toBe('But sometimes let is okay');
});
