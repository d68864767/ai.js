# Simplified AI Language Model

This project implements a simplified version of an AI language model that generates text based on an n-gram model. The n-gram model predicts the next item in a sequence based on the previous n items. This implementation supports n-gram sizes from 1 (unigram) to 10.

## Getting Started

To get started with this project, clone the repository and navigate to the project directory.

### Prerequisites

- Node.js installed on your system.

### Installation

No additional installation is required, as the project does not depend on any external libraries.

### Usage

To generate text using the n-gram model, you can call the `generateText` function from the `main.js` file. Here's an example of how to use it:

```javascript
const { generateText } = require('./main');

let corpus = [
  "the cat sat on the mat",
  "the dog chased the cat",
  "the bird flew over the dog"
];
let n = 2; // Bigram model

let generatedText = generateText(corpus, n);
console.log(generatedText);
```

The `generateText` function takes in two parameters:
- `corpus`: An array of strings representing the text corpus.
- `n`: An integer representing the n-gram model to be used for text generation.

The function will return a string containing exactly 50 words generated based on the n-gram model.

### Running Tests

To run the predefined test cases, execute the following command:

```bash
npm run test
```

This will run the tests defined in `test.js` and output the results to the console.

## Function Signature

```javascript
function generateText(corpus: string[], n: number): string
```

## Input

- `corpus`: An array of strings (1 <= |corpus| <= 10^5), where each string has at least 1 and at most 1000 characters, consisting of only lowercase English letters and spaces.
- `n`: An integer (1 <= n <= 10) representing the n-gram model.

## Output

- A string representing the generated text based on the n-gram model, containing exactly 50 words.

## Constraints

- The function should run in a reasonable time for the maximum input size.
- No external libraries are used. Only the built-in libraries of Node.js are allowed.
- The function handles cases where the n-gram model cannot generate the next word by randomly selecting the next word from the entire corpus.

## License

This project is licensed under the ISC License.

## Author

[Your Name]

