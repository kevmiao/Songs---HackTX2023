const fs = require('fs');
const csv = require('csv-parser');

const gElement = doc.querySelector('#au'); // Replace 'au' with the actual id

// Create an <a> element
const aElement = doc.createElement('a');
aElement.setAttribute('xlink:title', 'Australia');
aElement.setAttribute('xlink:href', 'https://en.wikipedia.org/wiki/Australia');
aElement.textContent = 'Australia';

// Append the <a> element to the <g> element
gElement.appendChild(aElement);


