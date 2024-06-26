import fs from 'fs';
import { data23to24 } from './rawdata23to24.js';

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
  'FGP',
  '3PM',
  '3PA',
  'TPP',
  'FTM',
  'FTA',
  'FTP',
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
    // use i as an id because there were some errors in raw data
    obj.id = i + 1;
    // Push the object to the data array
    data.push(obj);
  }

  return data;
}

const result = tableTextToObject(headers, data23to24);

// Convert the data to JSON format
const jsonData = JSON.stringify(result, null, 2);

// Write the data to a file
fs.writeFileSync('prepare-data/fullData23to24.json', jsonData);
