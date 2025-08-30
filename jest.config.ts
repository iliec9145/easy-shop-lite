import type { Config } from 'jest';
const config: Config = { testEnvironment:'jsdom', transform:{'^.+\\.(ts|tsx)$':['ts-jest',{tsconfig:'tsconfig.json'}]}, moduleFileExtensions:['ts','tsx','js','jsx'], setupFilesAfterEnv:['<rootDir>/tests/setupTests.ts'] };
export default config;
