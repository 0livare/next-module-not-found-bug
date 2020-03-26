In Next.js 9.3.2, when a SASS error happens, the Next cli properly tells me about the SASS error, but then it prints this error to the console every few seconds until I fix the SASS error.

> Note: The SASS error in this repository is intentional to demonstrate this Next.js issue

To reproduce the issue:

```bash
git clone https://github.com/zposten/next-module-not-found-bug.git
cd next-module-not-found-bug
yarn
yarn start
```

Full Next CLI output:

```bash
➜  next-module-not-found-bug git:(master) yarn start
yarn run v1.22.4
$ next dev
[ wait ]  starting the development server ...
[ info ]  waiting on http://localhost:3000 ...
[ error ] ./src/pages/_app.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/pages/_app.scss)
SassError: Can't find stylesheet to import.
  ╷
2 │ @use './mixins';
  │ ^^^^^^^^^^^^^^^
  ╵
  src/pages/index.scss 2:1  @use
  /Users/zach/dev/test/next-module-not-found-bug/src/pages/_app.scss 1:1                 root stylesheet
[ event ] build page: /next/dist/pages/_error
[ wait ]  compiling ...
[ error ] ./src/pages/_app.scss (./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-6-1!./node_modules/postcss-loader/src??__nextjs_postcss!./node_modules/resolve-url-loader??ref--5-oneOf-6-3!./node_modules/sass-loader/dist/cjs.js??ref--5-oneOf-6-4!./src/pages/_app.scss)
SassError: Can't find stylesheet to import.
  ╷
2 │ @use './mixins';
  │ ^^^^^^^^^^^^^^^
  ╵
  src/pages/index.scss 2:1  @use
  /Users/zach/dev/test/next-module-not-found-bug/src/pages/_app.scss 1:1                 root stylesheet
{ Error: Cannot find module '/Users/zach/dev/test/next-module-not-found-bug/.next/build-manifest.json'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)
    at Function.Module._load (internal/modules/cjs/loader.js:508:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.loadComponents (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/load-components.js:29:9)
    at DevServer.findPageComponents (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/next-server.js:529:60)
    at DevServer.renderErrorToHTML (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/next-server.js:829:33)
    at DevServer.renderErrorToHTML (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/server/next-dev-server.js:15:811)
    at process._tickCallback (internal/process/next_tick.js:68:7) code: 'MODULE_NOT_FOUND' }

# ... error repeating infinitely ...

{ Error: Cannot find module '/Users/zach/dev/test/next-module-not-found-bug/.next/build-manifest.json'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)
    at Function.Module._load (internal/modules/cjs/loader.js:508:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
    at Object.loadComponents (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/load-components.js:29:9)
    at DevServer.findPageComponents (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/next-server.js:529:60)
    at DevServer.renderErrorToHTML (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/next-server/server/next-server.js:829:33)
    at DevServer.renderErrorToHTML (/Users/zach/dev/test/next-module-not-found-bug/node_modules/next/dist/server/next-dev-server.js:15:811) code: 'MODULE_NOT_FOUND' }
```

This seems similar to:

- https://github.com/zeit/next.js/issues/7837
- https://github.com/zeit/next.js/issues/4660
- https://github.com/zeit/next.js/issues/6287

...but all these issues are closed
