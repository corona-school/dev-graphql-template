# GraphQL Frontend Template

A template for building GraphQL based frontends (setting this up is unnecessarily complicated). 
Queries can be written in `/src/queries/` in `.gql` files and can then be used as:
```ts
import { [QueryName]Document } from "./queries";
import { query, mutate } from "./client";

//     v this is automatically typesafe
const result = await query([QueryName]Document, { /* variables */ });
```

For a complete example see `src/example.ts`. 

This is typesafe, as the types are introspected from the backend. 
Errors in queries and mutations are thrown as `BackendError`s. 

### Installation

Run `npm ci` to install, `npm run build` to build and `npm start` to run the example. 

After changing a Query in the `/src/queries` folder, or after a new backend was deployed to dev, 
 run `npm generate-queries` to recreate the `/src/queries/index.ts` file. 