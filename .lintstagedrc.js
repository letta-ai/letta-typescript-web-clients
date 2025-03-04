module.exports = {
  '*': ['nx format:write'],
  '**/src/**/*.{js,jsx,ts,tsx}': (allStagedFiles) => {
    return `npx nx affected:lint`;
  },
};
