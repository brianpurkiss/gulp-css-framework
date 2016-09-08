##Structure

A pre-made gulp file will be included in CMS’s theme files along with some SASS files, located in the CSS folder. By using a dedicated gulp file, this allows us to use SASS whether the client site includes CEF or not, and no matter what CMS we use. Variables, global classes, and the core site structure’s styles will be in the main clarity.scss file, and additional .scss files will be included at the bottom of the clarity.scss file. Additional pages on the website will have their styles separated into individual .scss files to help with organization and maintenance; include an underscore at the front of additional .scss files. This allows us to easily remove styles as the site grows and changes, helping avoid orphaned styles.


The SASS file will call bootstrap’s CSS. Bootstrap can be customized through the _bootstrapVariables.scss file.

* What the gulp file does
* Debugs CSS for various errors
* Consolidates imported .scss files
* Compresses the .scss files
* Adds appropriate browser prefixes
* Outputs errors if applicable

## Usage Instructions

First Time

* Install SASS onto your computer: http://sass-lang.com/install
* Install Node onto your computer: https://nodejs.org/en/download/

## Initial Project Setup

* In command line, navigate to the theme’s CSS folder
* Run the npm install via the included package.json. This installs gulp, sass, gulp-watcher, and gulp-autoprefixer
```
npm install
```
* Run the Gulp build (gulp commands are case sensitive)
```
gulp sass
```

When Working on the Project

* Turn on file watch (gulp commands are case sensitive)
```
gulp sassWatch
```
* Work within the .scss files instead of the .css files
* Use ctrl+c to stop watching

Conventions to Work With

* Include additional SCSS files with @import ‘fileName’;
* Use double slash (//) for stylesheet comments, these comments will be removed upon compiling.
* Use an underscore at the beginning of new file names. That tells SASS to not compile that file into its own file, but it will still be compiled into the master file if it's been imported.
* Include global variables (like new colors, etc) in the BootstrapVariables folder. That makes it easier to break out the site into multiple CSS files if the scope of the website calls for it. This also helps prevent ordering issues.

## Learn SASS

http://sass-lang.com/guide

## License

Licensed under the Open Source MIT License
