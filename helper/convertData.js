import fs from 'fs';
import fullData22to23 from '../data/fullData22to23.json' assert { type: 'json' };

const extractNecessaryData = (data) =>
  data.map((data) => ({
    id: data.id,
    name: data.PLAYER,
    games: data.GP,
    team: data.TEAM,
    stats: {
      MIN: data.MIN,
      PTS: data.PTS,
      REB: data.REB,
      AST: data.AST,
      FGP: data.FGP,
      TPP: data.TPP,
      FTP: data.FTP,
      STL: data.STL,
      BLK: data.BLK,
      TOV: data.TOV,
    },
  }));

const writeOutput = (json) => {
  const result = extractNecessaryData(json);
  console.log(result[0]);
  const jsonData = JSON.stringify(result, null, 2);
  fs.writeFileSync('data22to23.json', jsonData);
};

writeOutput(fullData22to23);
// console.log(fullData22to23[0]);
