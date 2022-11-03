import foodItems from './src/modules/foodItems.js';
import itemsCounter from './src/modules/allItemsCounter.js';

describe('Test for Items Counter', () => {
  test('Test Items counter', () => {
    expect(itemsCounter()).toBe(foodItems.length);
  });
});