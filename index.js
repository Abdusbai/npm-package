const zlib = require("zlib");
const fs = require("fs");

function compressFile(inputFile, outputFile) {
  const readStream = fs.createReadStream(inputFile);
  const writeStream = fs.createWriteStream(outputFile);

  const gzip = zlib.createGzip();

  readStream.pipe(gzip).pipe(writeStream);
}

module.exports = {
  compressFile,
};
