const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  someAsyncOperation().then(() => {
    res.send('Hello, world!');
  }).catch(err => {
    console.error('Error:', err);
    // Without proper error handling here, the response is never sent.
    // Node.js might hang or the request might timeout.
  });
});

function someAsyncOperation() {
  // Simulate a potential error
  return new Promise((resolve, reject) => {
    // Example: reject if a certain condition is not met
    if (Math.random() < 0.5) {
      reject(new Error('Something went wrong!'));
    } else {
      resolve();
    }
  });
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});