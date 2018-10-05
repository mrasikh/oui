import {isFilterTermInItem, getFilteredItems} from '../filter';

const simpleString = 'Lorem Ipsum';
const simpleStringArray = ['cat', 'dog', 'bear'];
const objects = [
  {
    selectOption: {},
    value: 'cat',
  },
  {
    selectOption: {},
    value: 'dog',
  },
  {
    selectOption: {},
    value: 'bear',
  },
];

describe('utils/filter', () => {
  describe('#isFilterTermInItem', () => {
    it('should return `true` if an existing items is searched', function() {
      const isFilterTermInItemResult = isFilterTermInItem('ore', simpleString);

      expect(isFilterTermInItemResult).toBe(true);
    });
    it('should search when `stringToFind` contains space in between', function() {
      const isFilterTermInItemResult = isFilterTermInItem('ca ore', simpleString);

      expect(isFilterTermInItemResult).toBe(true);
    });

    it('should return false if empty `stringToFind` is provided', function() {
      expect(isFilterTermInItem('', simpleString)).toBe(false);
    });

    it('should throw error when null `stringToFind` is provided', function() {
      expect(() => { isFilterTermInItem(null, simpleString); }).toThrow();
    });
  });

  describe('#getFilteredItems', () => {
    it('should search the `filterString` in a simple string array and return matching elements', function() {
      const getFilteredItemsResult = getFilteredItems('a', simpleStringArray);

      expect(getFilteredItemsResult).toHaveLength(2);
      expect(getFilteredItemsResult[0]).toEqual('cat');
      expect(getFilteredItemsResult[1]).toEqual('bear');
    });

    it('should search an array of object when `key` is provided', function() {
      const getFilteredItemsResult = getFilteredItems('a', objects, 'value');

      expect(getFilteredItemsResult).toHaveLength(2);
      expect(getFilteredItemsResult[0].value).toEqual('cat');
      expect(getFilteredItemsResult[1].value).toEqual('bear');
    });

    it('should trim the final result when `maxResult` is provided', function() {
      const getFilteredItemsResult = getFilteredItems('a', objects, 'value', 1);
      expect(getFilteredItemsResult).toHaveLength(1);
    });

    it('should throw error when null is provided as `items`', function() {
      const getFilteredItemsWrapepr = () => {
        getFilteredItems('a', null);
      };
      expect(getFilteredItemsWrapepr).toThrow();
    });
  });
});
