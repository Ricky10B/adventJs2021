function fixFiles(files) {
  let founds = {};
  return files.map(file => {
    if(founds[file]) {
      return file + `(${founds[file]++})`
    }
    founds[file] = 1;
    return file;
  });
}

module.exports = fixFiles
