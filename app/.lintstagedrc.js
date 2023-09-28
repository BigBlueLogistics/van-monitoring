const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

const prettierCommand = (filenames) =>
  `prettier --write ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  // Type check
  '**/*.ts?(x)': () => 'npm run type:check',
  // Lint and prettier
  '**/*.{js,jsx,ts,tsx}': [prettierCommand, buildEslintCommand],
};
