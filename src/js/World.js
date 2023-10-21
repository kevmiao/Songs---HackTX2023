console.log('hi')

const fs = require('fs');
const csv = require('csv-parser');

const acronym_table = [];

fs.createReadStream('data.csv')
  .pipe(csv())
  .on('data', (row) => {
    // Process each row from the CSV file and add it to the 2D array
    acronym_table.push(Object.values(row));
  })
  .on('end', () => {
    // The CSV parsing is complete, and the data is in the dataTable.
    console.log(acronym_table);
  });

const gElement = doc.querySelector('#au'); // Replace 'au' with the actual id

// // Create an <a> element
// const aElement = doc.createElement('a');
// aElement.setAttribute('xlink:title', 'Australia');
// aElement.setAttribute('xlink:href', 'https://en.wikipedia.org/wiki/Australia');
// aElement.textContent = 'Australia';

// // Append the <a> element to the <g> element
// gElement.appendChild(aElement);


