const fs = require('fs');
const path = require('path')
const {promisify} = require('util');

const readdirPromised = promisify(fs.readdir);
const readFilePromised = promisify(fs.readFile);

const getFilesList = async () => {
  const fiiles = readdirPromised(path.join(__dirname, '../..', 'files'))

  return fiiles;
}

const getFileTables = async (filename = '') => {
  try {
    const table = await readFilePromised(path.join(__dirname, '../..', 'files', filename));

    return JSON.parse(table.toString()).tables
  } catch (e) {
    console.error(e)
    return null
  }
}

module.exports = {
  getFilesList,
  getFileTables
}
