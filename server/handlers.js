const { getFilesList, getFileTables, getTable } = require('./services/files-service')

const handlers = (ipcMain) => {
  ipcMain.handle('GET_FILES', async () => {
    return getFilesList();
  })

  ipcMain.handle('GET_TABLES', async (_event, filename ) => {
    return getFileTables(filename);
  })
}

module.exports = handlers;
