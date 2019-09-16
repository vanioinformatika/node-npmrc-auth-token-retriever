[![Build Status](https://travis-ci.org/vanioinformatika/node-npmrc-auth-token-retriever.svg?branch=master)](https://travis-ci.org/vanioinformatika/node-npmrc-auth-token-retriever)

Search auth token inside `.npmrc` file base on registry URL. 

## Installation

```
npm install @vanioinformatika/npmrc-auth-token-retriever --save
```

## Usage

**From CLI:**

```
npx retrieve-auth-token --registry private-registry.organization.com
```

**From node:**

```javascript
import {retrieveAuthToken} from '@vanioinformatika/npmrc-auth-token-retriever'

const token = retrieveAuthToken('private-registry.organization.com')

if (token) {
    // Do something with token
} else {
    // Token not found in .npmrc file
}
```

If registry is not set, then default npmjs registry will be used (`registry.npmjs.org`).

> **Note:** Typescript declaration files are included in package.
