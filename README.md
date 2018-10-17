# redux-api-camelize-middleware

This middleware needs for camelize property names of responses such is:

GET request to (https://pokeapi.co/api/v2/type/3/)[example API] will result:

```json
{
  "damage_relations": {
    "double_damage_from": [
      {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    ]
  }
}
```

After middleware handling:

```json
{
  "damageRelations": {
    "doubleDamageFrom": [
      {
        "name": "rock",
        "url": "https://pokeapi.co/api/v2/type/6/"
      }
    ]
  }
}
```

## Install

### 1. Add package

Yarn:

`yarn add redux-api-camelize-middleware`

NPM:

`npm install --save redux-api-camelize-middleware`

### 2. Add middleware at your redux store config

```js
import reduxApiCamelizeMiddleware from 'redux-api-camelize-middleware';

...

const middlewares = [
  ...
  thunk,
  axiosMiddleware(client),
  axiosCamelizeResponses,
  ...
];


const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));
```

That's all!
