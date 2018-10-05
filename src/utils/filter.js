/**
 * Find if a string contains the filter terms.
 * Filter term containing spaces shall be break in sub-strings.
 * And each filter-term-sub-string shall be searched separately in the string.
 * @param stringToFind
 * @param contentToSearch
 * @returns {boolean}
 */
export const isFilterTermInItem = function isFilterTermInItem(stringToFind, contentToSearch) {
  if (!contentToSearch) {
    return false;
  }

  const filters = stringToFind.match(/\S+/g) || [];

  for (let i = 0; i < filters.length; i++) {
    let lowerCaseContent = contentToSearch.toLocaleLowerCase();
    let lowerCaseFilter = filters[i].toLocaleLowerCase();

    if (lowerCaseContent.includes(lowerCaseFilter)) {
      return true;
    }
  }
  return false;
};

/**
 * Returns a filtered array.
 * If `filterString` is null or empty string, it will return the original array.
 * Although the maxResult shall be applied and the array shall be trimmed down to maxResult size.
 * @param filterString: term to search inside array
 * @param items: Objects on which filter shall be applied
 * @param key: if `items` is an array of objects,
 * `key` will tell on which property of `items object` the filter shall be applied.
 * @param maxResult: size of end result array.
 * @returns {*}
 */
export const getFilteredItems = function(filterString, items, key = null, maxResult = Number.MAX_SAFE_INTEGER) {
  if (!items) {
    throw new Error('Can\'t filter on an undefined array');
  }

  let result = [];
  let foundCount = 0;

  items.map(function(item) {
    let contentToSearch = key ? item[key] : item;
    if (foundCount < maxResult && (!filterString || isFilterTermInItem(contentToSearch, filterString))) {
      result.push(item);
      foundCount++;
    }
  });
  return result;
};
