# Unhandled Promise Rejection in Express.js

This repository demonstrates a common issue in Node.js applications using Express.js: unhandled promise rejections in asynchronous route handlers.  The `bug.js` file showcases a scenario where an asynchronous operation might throw an error, but the error isn't properly handled, leading to a potential silent failure. The `bugSolution.js` file provides a solution that addresses the issue.

## Problem

Asynchronous operations within Express.js routes are often handled using promises.  If a promise rejects (due to an error), and that rejection isn't caught, it results in an unhandled promise rejection.  While Node.js might log a warning to the console, the request might hang, time out, or produce unexpected results.  This makes debugging challenging because there's no clear indication of the error from the server's perspective.

## Solution

Always handle promise rejections within your asynchronous route handlers using `.catch()`.  This ensures that errors are handled gracefully, preventing unhandled promise rejections and providing more robust error management in your application.