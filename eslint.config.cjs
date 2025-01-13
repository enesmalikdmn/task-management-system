module.exports = [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
    rules: {
      // Prettier ile uyumlu olmayan kuralları buradan kaldırabilirsiniz
    },
  },
];
