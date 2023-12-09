const fs = require('fs');

/**
 * Generates a new string based on the n-gram model.
 * @param {string[]} corpus - An array of strings representing the text corpus.
 * @param {number} n - The n-gram model to be used for text generation.
 * @returns {string} - The generated text.
 */
function generateText(corpus, n) {
  // Build the n-gram model
  const nGrams = {};
  for (const text of corpus) {
    const words = text.split(' ');
    for (let i = 0; i <= words.length - n; i++) {
      const gram = words.slice(i, i + n).join(' ');
      const next = words[i + n] || null;
      if (!nGrams[gram]) {
        nGrams[gram] = [];
      }
      if (next) {
        nGrams[gram].push(next);
      }
    }
  }

  // Helper function to pick a random element from an array
  const pickRandom = (array) => array[Math.floor(Math.random() * array.length)];

  // Start with a random n-gram from the corpus
  let currentGram = pickRandom(Object.keys(nGrams));
  let result = currentGram.split(' ');

  // Generate the text
  for (let i = 0; result.length < 50; i++) {
    if (nGrams[currentGram]) {
      const possibleNextWords = nGrams[currentGram];
      const nextWord = pickRandom(possibleNextWords);
      result.push(nextWord);
      currentGram = result.slice(result.length - n, result.length).join(' ');
    } else {
      // If the n-gram model cannot generate the next word, select randomly from the corpus
      currentGram = pickRandom(Object.keys(nGrams));
      result = result.concat(currentGram.split(' '));
    }
  }

  // Return the first 50 words
  return result.slice(0, 50).join(' ');
}

// Example usage:
// let corpus = ["the cat sat on the mat", "the dog chased the cat", "the bird flew over the dog"];
// let n = 2;
// console.log(generateText(corpus, n));

// Read corpus from a file or other source if needed
// For example, if you have a corpus.txt file with each line as a sentence:
// const corpus = fs.readFileSync('corpus.txt', 'utf8').split('\n');

// Read n from a file, user input, or other source if needed
// For example, if you have a config.json file with n value:
// const config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
// const n = config.n;

// Generate and output the text
// console.log(generateText(corpus, n));

module.exports = { generateText };
