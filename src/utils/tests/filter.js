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
      expect(() => {isFilterTermInItem('ore', simpleString); }).toBe(true);
    });
    it('should search when `stringToFind` contains space in between', function() {
      const isFilterTermInItemWrapper = () => {
        isFilterTermInItem('ca ore', simpleString);
      };
      expect(isFilterTermInItemWrapper).toBe(true);
      expect(isFilterTermInItemWrapper).toBe(false);
    });

    it('should return false if empty or null `stringToFind` is provided', function() {
      expect(() => {isFilterTermInItem('', simpleString); }).toBe(false);
      expect(() => {isFilterTermInItem(null, simpleString); }).toBe(false);
    });
  });

  describe('#getFilteredItems', () => {
    it('should search the `filterString` in a simple string array and return matching elements', function() {
      const getFilteredItemsWrapper = () => {
        return getFilteredItems('a', simpleStringArray);
      };
      expect(getFilteredItemsWrapper.length).toEqual(2);
      expect(getFilteredItemsWrapper.at(0)).toEqual('cat');
      expect(getFilteredItemsWrapper.at(1)).toEqual('bear');
    });

    it('should search an array of object when `key` is provided', function() {
      const getFilteredItemsWrapper = () => {
        return getFilteredItems('a', objects, 'value');
      };
      expect(getFilteredItemsWrapper.length).toEqual(2);
      expect(getFilteredItemsWrapper.at(0).value).toEqual('cat');
      expect(getFilteredItemsWrapper.at(1).value).toEqual('bear');
    });

    it('should trim the final result when `maxResult` is provided', function() {
      const getFilteredItemsWrapper = () => {
        return getFilteredItems('a', objects, 'value', 1);
      };
      expect(getFilteredItemsWrapper.length).toEqual(1);
    });

    it('should throw error when empty array is provided', function() {
      expect(() => {getFilteredItems('a', []); }).toThrow();
    });
  });
});
