# eslint-plugin-nexus

nexus

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nexus`:

```
$ npm install eslint-plugin-nexus --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nexus` globally.

## Usage

Add `nexus` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nexus"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nexus/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





