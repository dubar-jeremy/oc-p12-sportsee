module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
  },
  testPathIgnorePatterns: ['<rootDir>/src/config/*.ts'],
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/configs/**',
    '!src/data/**/**',
    '!src/**/*.d.ts',
    '!src/main.tsx',
    '!src/setupTests.ts',
    '!src/**/index.{ts,tsx}',
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
    '!src/**/serviceWorker.ts',
  ],
};
