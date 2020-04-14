# doc-api

A Web API documentation generator based on [JSDoc](https://github.com/jsdoc/jsdoc) and [docdash](https://github.com/clenemt/docdash) template theme.

## Install

```bash
$ npm install jsdoc
$ npm install api-jsdoc
```

In your projects `package.json` file add a new script:

```json
"script": {
  "docs": "node_modules/.bin/jsdoc -c jsdoc.json"
}
```

Add `jsdoc.json` file in your project.


```json
{
    "tags": {
      "allowUnknownTags": true
    },
    "source": {
      "include": "router/api",
      "includePattern": "\\.js$",
      "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
      "node_modules/api-jsdoc/events",
      "node_modules/api-jsdoc/tags",
      "plugins/markdown"
    ],
    "opts": {
      "template": "node_modules/docdash",
      "encoding": "utf8",
      "destination": "docs/",
      "recurse": true,
      "verbose": true
    },
    "templates": {
      "cleverLinks": false,
      "monospaceLinks": false
    },
    "docdash": {
      "sectionLabel": {
        "Namespaces": "Routes"
    }
  }
}
```

## Usage

Add comments anywhere in your source code:

```javascript
/**
 * Returns data about a user.
 *
 * @uri GET user/:id
 * @param id {number} User id
 * @returns {object[]}
 * @response name {string} User name
 * @response address {string} User address
 */
```

To group endpoints under a label use `namespace`:

```javascript
/**
 * Application's user.
 * @namespace user
 */
```

And add `memberof` in the comment:

```javascript
/**
 * Creats a user.
 * @memberof cargo
 * @uri POST user
 * @param name {string} User name
 * @param address {string} User address
 * @returns {object}
 * @response success {boolen}
 */
```

## License
Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
