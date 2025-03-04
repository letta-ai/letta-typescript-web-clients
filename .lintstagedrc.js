module.exports = {
  '*': ['nx format:write --files'],
  // '**/src/**/*.{js,jsx,ts,tsx}': allStagedFiles => {
  //     console.log('a', allStagedFiles)
  //     return [...allStagedFiles]
  //         .filter(([project, files]) => files.length)
  //         .map(([projectName, files]) => `nx lint ${projectName} --lintFilePatterns=${files.join(',')}`);
  // }
};
