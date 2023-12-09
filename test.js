const { generateText } = require('./main');

// Define a simple test suite function
function testGenerateText() {
  // Test cases
  const testCases = [
    {
      corpus: ["the cat sat on the mat", "the dog chased the cat", "the bird flew over the dog"],
      n: 2,
      description: 'Bigram model test'
    },
    {
      corpus: ["once upon a time", "there was a young programmer", "who tried to write a test"],
      n: 3,
      description: 'Trigram model test'
    },
    {
      corpus: ["hello world", "hello there", "world of programming"],
      n: 1,
      description: 'Unigram model test'
    }
  ];

  // Run each test case
  testCases.forEach((testCase, index) => {
    console.log(`Running Test Case #${index + 1}: ${testCase.description}`);
    try {
      const output = generateText(testCase.corpus, testCase.n);
      const wordCount = output.split(' ').length;
      if (wordCount === 50) {
        console.log('Success:', output);
      } else {
        console.error('Failure: Expected generated text to have 50 words, got', wordCount);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
    console.log(''); // Add a newline for readability
  });
}

// Run the test suite
testGenerateText();
