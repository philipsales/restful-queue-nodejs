'use strict';

function setFilename(filePath){
   return filePath.split(/[\\/]/).pop()
}

module.exports = { setFilename }