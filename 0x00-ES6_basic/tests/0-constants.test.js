/**
 * Jest tests for JavaScript functions in '0-constant.test.js'.
 */
import { taskFirst, taskNext, getLast } from '../0-constants.js';
import jestConfig from '../jest.config.js';

describe('taskFirst', () => {
  it('should return a string containing "const"', () => {
    const result = taskFirst();
    expect(result).toContain('const');
  });
});

describe('taskNext', () => {
  it('should return a string containing "let"', () => {
    const result = taskNext();
    expect(result).toContain('let');
  });

  it('should include the result of getLast()', () => {
    const result = taskNext();
    expect(result).toContain(getLast());
  });
});

describe('getLast', () => {
  it('should return " is okay"', () => {
    const result = getLast();
    expect(result).toBe(' is okay');
  });
});
