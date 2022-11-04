import commentsCounters from './modules/countComment.js';
import mockComment from './modules/__MockTest__/mockComment.js';

describe('Test For the count function', () => {
  test('if array is empty', () => {
    const array = [];
    expect(commentsCounters(array)).toBe(0);
  });
  test('6 items', () => {
    const array = [{ idMeal: '52791' }, { idMeal: '52791' }];
    expect(commentsCounters(array)).toBe(2);
  });
});

describe('Test For Commnet count', () => {
  test('Test For item_id 1', () => {
    expect(commentsCounters(mockComment[0])).toBe(2);
  });
  test('Test For item_id 2', () => {
    expect(commentsCounters(mockComment[1])).toBe(3);
  });
  test('Test For item_id 3', () => {
    expect(commentsCounters(mockComment[2])).toBe(4);
  });
});
