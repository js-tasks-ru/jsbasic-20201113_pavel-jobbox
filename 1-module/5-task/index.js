/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
function truncate(str, maxlength) {
  if (str.length > maxlength) {
    str = str.slice(0, maxlength);
    return str + '...';
  } else {
    return str;
  }
}