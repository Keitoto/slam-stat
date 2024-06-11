import fs from 'fs';
import fullData23to24 from './fullData23to24.json' assert { type: 'json' };

const season = '23to24';

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
  fs.writeFileSync(`app/data/data${season}.json`, jsonData);
};

const writeSearchData = (json) => {
  const result = createSearchData(json);
  const jsonData = JSON.stringify(result, null, 2);
  fs.writeFileSync(`app/data/searchData${season}.json`, jsonData);
};

writeNecessaryData(fullData23to24);
writeSearchData(fullData23to24);
