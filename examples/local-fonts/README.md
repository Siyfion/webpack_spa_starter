# Adding local font support to the Starter Kit

## Installation

To add support for local font files, you need to ensure that you have the `file-loader` package installed from npm in the `devDependencies`. (It's included as part of the starter kit by default)

```bash
# Install file loader as a dev-dependency
yarn add -D file-loader
```

## Add to asset pipeline

**webpack.common.js**

```diff
  module.exports = {
    ...
    module: {
      rules: [
        ...
+       {
+         test: /\.(woff|woff2|eot|ttf|otf)$/,
+         use: [
+           'file-loader'
+         ]
+       }
      ]
    }
  }
```

## Usage

First, add the font files to your project:

**project**

```diff
  webpack_spa_starter
  |- .babelrc
  |- .gitignore
  |- README.md
  |- package.json
  |- yarn.lock
  |- webpack.common.js
  |- webpack.dev.js
  |- webpack.prod.js
  |- /dist
    |- app.js
    |- index.html
  |- /src
+   |- my-font.woff
+   |- my-font.woff2
    |- icon.png
    |- style.css
    |- index.js
  |- /node_modules
```

With the loader configured and fonts in place, you can use incorporate them via an `@font-face` declaration. The local `url(...)` directive will be picked up by webpack just as it is with images:

**src/App.scss**

```diff
+ @font-face {
+   font-family: 'MyFont';
+   src:  url('./my-font.woff2') format('woff2'),
+         url('./my-font.woff') format('woff');
+   font-weight: 600;
+   font-style: normal;
+ }

  .App-title {
    font-size: 1.5em;
+   font-family: 'MyFont';
  }
```
