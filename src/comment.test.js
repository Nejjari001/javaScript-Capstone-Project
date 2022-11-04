import counter from './modules/counter.js';
import mockComment from './modules/__MockTest__/mockComment.js';

describe('Test For the count function', () => {
  test('if array is empty', () => {
    const array = [];
    expect(counter(array)).toBe(0);
  });
  test('2 items', () => {
    const array = [{ idMeal: '52791' }, { idMeal: '52791' }];
    expect(counter(array)).toBe(2);
  });
});

describe('Test For Commnet count', () => {
  test('Test For item_id 1', () => {
    expect(counter(mockComment[0].comment)).toBe(2);
  });
  test('Test For item_id 2', () => {
    expect(counter(mockComment[1].comment)).toBe(3);
  });
  test('Test For item_id 3', () => {
    expect(counter(mockComment[2].comment)).toBe(4);
  });
});
