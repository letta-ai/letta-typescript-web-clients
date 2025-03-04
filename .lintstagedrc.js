module.exports = {
  '*': ['nx format:write --files'],
  '**/src/**/*.{js,jsx,ts,tsx}': (allStagedFiles) => {
    return `nx lint ${allStagedFiles.join(' ')}`;
  },
};
