import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

async function fetchData() {
  const result = await fetch('../data/mappingAcronyms.csv');
  const data = await result.text();
  return data;
}

async function main() {
  let acronym = await fetchData();
  console.log(acronym); // This will be the CSV data as a string

  const gElement = document.getElementById('au'); // Replace 'au' with the actual id
  const aElement = document.createElement('a');
  aElement.setAttribute('xlink:title', 'Australia'); // Replace with your desired URL
  aElement.setAttribute('xlink:href', 'https://example.com'); // Replace with your desired URL

  while (gElement.firstChild) {
      aElement.appendChild(gElement.firstChild);
    }
    
    // Append the <a> element to <g>
    gElement.appendChild(aElement);

}

main()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

