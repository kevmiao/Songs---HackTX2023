console.log('hi')

async function parseCSVFile() {
    try {
      const response = await fetch('../data/mappingAcronyms.csv'); // Replace 'yourfile.csv' with the actual filename or path
      if (!response.ok) {
        throw new Error('Failed to fetch CSV file');
      }
      const csvData = await response.text();
  
      // Parse the CSV data using Papaparse
      const results = Papa.parse(csvData, {
        header: true, // Assumes the first row contains headers
        dynamicTyping: true, // Automatically detect data types
      });
    //   console.log(results.data);
    } catch (error) {
      console.error('Error:', error);
    }
}

parseCSVFile();
console.log(results.data)
    


// const gElement = doc.querySelector('#au'); // Replace 'au' with the actual id

// // Create an <a> element
// const aElement = doc.createElement('a');
// aElement.setAttribute('xlink:title', 'Australia');
// aElement.setAttribute('xlink:href', 'https://en.wikipedia.org/wiki/Australia');
// aElement.textContent = 'Australia';

// // Append the <a> element to the <g> element
// gElement.appendChild(aElement);


