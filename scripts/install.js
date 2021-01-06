'use strict';

const electron_rebuild = require('electron-rebuild');
const path = require('path');

electron_rebuild
  .rebuild({
    buildPath: path.join(__dirname, '..'),
    electronVersion: '11.1.1',
  })
  .then(() => console.info('Rebuild Successful'))
  .catch(e => {
    console.error("Building modules didn't work!");
    console.error(e);
  });
