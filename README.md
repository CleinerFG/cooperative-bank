# Financial Manager

## README File Languages

- [English](README.md)
- [Portuguese-BR](README-pt.md)

## Description

This is a web development project simulating a cooperative bank between peoples, built with `HTML`, `CSS`, and `JavaScript`. It uses `webpack` to compile and optimize project files.

## Technologies Used

- **`HTML`**: Structuring the pages.
- **`CSS`**: Styling the pages.
- **`JavaScript`**: Functionality and interactivity.
- **`Webpack`**: Bundler for packaging and optimizing files.

## Project Structure

- **`src/`**: Contains all source files.

  - **`pages/`**: HTML files for the pages.
  - **`css/`**: CSS files.
  - **`js/`**: JavaScript files.
  - **`assets/icons/`**: SVG icons.

- **`dist/`**: Folder generated after running the build with `npm run build`, containing optimized and production-ready files.

## Initialization

### Installing Dependencies

To install the project's dependencies, run:

```bash
npm install
```

### Project Build

To generate the optimized files ready for distribution, run:

```bash
npm run build
```

## Webpack Configuration

### File: webpack.config.js

The `webpack.config.js` file is configured to:

- **Entry**: Define the entry points for JavaScript files.
- **Output**: Configure where the compiled files will be saved and with which names.
- **Loaders**: Configure loaders to process CSS, JS, and SVG files.
  - `css-loader` for CSS files.
  - `babel-loader` for JavaScript files.
  - `html-loader` to process images and other resources within HTML files.
  - `asset/resource` to generate assets in **`dist/`**
- **Plugins**: Uses plugins for optimization and HTML management.
  - `HtmlWebpackPlugin` to generate HTML files with updated links to CSS and JS.
  - `MiniCssExtractPlugin` to extract CSS into files separate from JavaScript.
  - `CssMinimizerPlugin` o minimize CSS files.

### Configuration of Files: HTML and JS

In HTML, imports of JS and CSS used in the development process are included.

Example:

```html
<link rel="stylesheet" href="../css/home.css" />
<script type="module" src="../js/home.js"></script>
```

- These imports should be removed before the project build. If they are not removed, they will remain in the final `.html` file.

## Development Settings

### JavaScript Files

- Remove the `.css` imports from `JavaScript` files to allow the project to run in development.

- Remove the icon import in [visibilitySwitch.js](src/js/modules/home/visibilitySwitch.js)

```Javascript
import "../../../assets/icons/icon-visibility-on.svg";
```

All assets are added in [dist/assets/icons](dist/assets/icons/) through `asset/resource`. This import is necessary because `html-loader` removes assets not directly used in the HTML. The icon [icon-visibility-on.svg](src/assets/icons/icon-visibility-on.svg) is added by `Javascript` in [visibilitySwitch.js](src/js/modules/home/visibilitySwitch.js) and isn't added directly in the HTML.
