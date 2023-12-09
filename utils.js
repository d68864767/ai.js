/**
 * Utility functions for the simplified AI language model.
 */

/**
 * Picks a random element from an array.
 * @param {Array} array - The array from which to pick an element.
 * @returns - A random element from the array.
 */
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

module.exports = {
  pickRandom
};
