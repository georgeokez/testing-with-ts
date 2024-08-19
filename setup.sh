#!/bin/bash

echo "######## START - SETUP SCRIPT #######"
echo ""

## Setup npm project with yes as default
 
npm init --yes

## Install necessary packages

npm i -D typescript @types/jest jest ts-jest ts-node


## Create and install tsconfig.json file
touch tsconfig.json

ts_config='{
  "compilerOptions": {
    "esModuleInterop": true
  }
}
'

echo "$ts_config" >> tsconfig.json


# Create and install jest.config.ts file
touch jest.config.ts

jest_config='import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
  preset: "ts-jest",
  testEnvironment: "node",
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/app/**/*.ts"],
};

export default config;
'

echo "$jest_config" >> jest.config.ts


## Create src, app and test folders

mkdir ./src

mkdir ./src/app
mkdir ./src/test

touch ./src/app/app.ts
touch ./src/test/app.test.ts


echo "######## END - SETUP SCRIPT  #######"