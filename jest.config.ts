import { Config } from 'jest';

const jestConfig: Config = {
  verbose: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@utils/(.*)$': '<rootDir>/src/utils/$1',
    '^@config/(.*)$': '<rootDir>/config/$1',
    '^@public/(.*)$': '<rootDir>/public/$1',
  },
};

export default jestConfig;
