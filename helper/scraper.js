import fs from 'fs';
import { data22to23 } from '../data/rawdata22to23.js';

const headers = [
  'id',
  'PLAYER',
  'TEAM',
  'AGE',
  'GP',
  'W',
  'L',
  'MIN',
  'PTS',
  'FGM',
  'FGA',
  'FG%',
  '3PM',
  '3PA',
  '3P%',
  'FTM',
  'FTA',
  'FT%',
  'OREB',
  'DREB',
  'REB',
  'AST',
  'TOV',
  'STL',
  'BLK',
  'PF',
  'FP',
  'DD2',
  'TD3',
  '+/-',
];

function tableTextToObject(headers, tableText) {
  // Split the table text into rows
  const rows = tableText.trim().split('\n');

  // Extract data from each row
  const rowData = rows.map((row) => row.trim().split('\t'));

  // Create an array to store objects for each row
  const data = [];

  // Loop through rowData to create objects
  for (let i = 0; i < rowData.length; i++) {
    const obj = {};
    // Loop through headers and rowData to create the object
    for (let j = 0; j < headers.length; j++) {
      // Convert numerical values to numbers if possible
      const value = isNaN(Number(rowData[i][j]))
        ? rowData[i][j]
        : Number(rowData[i][j]);

      // Assign data to the corresponding header
      obj[headers[j]] = value;
    }
    // Push the object to the data array
    data.push(obj);
  }

  return data;
}

const result = tableTextToObject(headers, data22to23);

// Convert the data to JSON format
const jsonData = JSON.stringify(result, null, 2);

// Write the data to a file
fs.writeFileSync('data22to23.json', jsonData);

console.log('Data has been written to output.json file.');
