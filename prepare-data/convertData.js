import fs from 'fs';
import fullData22to23 from '../../data/fullData22to23.json' assert { type: 'json' };

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

const createSearchData = (data) =>
  data.map((data) => ({
    id: data.id,
    name: data.PLAYER,
    games: data.GP,
  }));

const writeNecessaryData = (json) => {
  const result = extractNecessaryData(json);
  const jsonData = JSON.stringify(result, null, 2);
  fs.writeFileSync('../data/data22to23.json', jsonData);
};

const writeSearchData = (json) => {
  const result = createSearchData(json);
  const jsonData = JSON.stringify(result, null, 2);
  fs.writeFileSync('../data/searchData22to23.json', jsonData);
};

writeNecessaryData(fullData22to23);
writeSearchData(fullData22to23);
