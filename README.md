# doc-api

A quick-start API documentation generator based on [JSDoc](https://github.com/jsdoc/jsdoc) and [docdash](https://github.com/clenemt/docdash) template theme.

## Install

```bash
$ npm install jsdoc
$ npm install doc-api
```

## Usage
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
        "include": "../js",
        "includePattern": "\\.js$",
        "excludePattern": "(node_modules/|docs)"
    },
    "plugins": [
        "node_modules/doc-api/events",
        "node_modules/doc-api/tags",
        "plugins/markdown"
    ],
    "opts": {
        "template": "node_modules/doc-api/node_modules/docdash",
        "encoding": "utf8",
        "destination": "docs/",
        "recurse": true,
        "verbose": true
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false
    }
}
```

## License
Licensed under the Apache License, version 2.0. (see [Apache-2.0](LICENSE.md)).
