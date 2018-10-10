/**
 * Find if a string contains the filter terms.
 * Filter term containing spaces shall be break in sub-strings.
 * And each filter-term-sub-string shall be searched separately in the string.
 * @param {string} stringToFind: string to find.
 * @param {string} contentToSearch: string object
 * @returns {boolean}
 */
export const isFilterTermInItem = function isFilterTermInItem(stringToFind, contentToSearch) {
  if (typeof contentToSearch !== 'string' || typeof stringToFind !== 'string') {
    return false;
  }

  const filters = stringToFind.match(/\S+/g) || [''];

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
 * Although the maxResult shall be applied
 * and the array shall be trimmed down to maxResult size.
 * @param {string} filterString: Filter term to search inside array
 * @param {Array} items: Array of objects on which filter shall be applied
 * @param {string} key: if `items` is an array of objects,
 * `key` will tell on which property of `items object`
 * the filter shall be applied.
 * @param {number} maxResult: size of end result array.
 * @returns {*}
 */
export const getFilteredItems = function(filterString, items, key = null, maxResult = Number.MAX_SAFE_INTEGER) {
  items = items || [];

  if (typeof filterString !== 'string') {items.slice(0, maxResult);}

  let filteredItems = items.filter(item => {
    let contentToSearch = key ? item[key] : item;
    return isFilterTermInItem(filterString, contentToSearch);
  });
  return filteredItems.slice(0, maxResult);
};
