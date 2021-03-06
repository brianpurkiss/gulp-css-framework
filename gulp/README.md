
# What the gulp file does
* Debugs CSS for various errors
* Consolidates imported .scss files
* Compresses the .scss files
* Adds appropriate browser prefixes
* Outputs errors if applicable

# Available Gulp commands

`gulp sass`

Development oriented gulp command. Compiles, uses autoprefixer, and sourcemap. This is the default gulp command.

`gulp sassWatch`

Runs `gulp sass` but watches the sass files and auto compiles when saving files.

`gulp prodSASS`

Compiles and compresses Sass for a production environment, but doesn't include development utilities like sourcemap.

`gulp scripts`

Uses "@import" in scripts.js to order and consolidate the listed JS files.

`gulp scriptsWatch`

Runs `gulp scripts` but watches the Javascript files and auto compiles when saving files.

`gulp prodScripts`

Consolidates and compresses Javascript files for a production environment.



## Usage Instructions

First Time

* Install SASS onto your computer: http://sass-lang.com/install
* Install Node onto your computer: https://nodejs.org/en/download/

## Initial Project Setup

* In Terminal (Mac) or Command Line (Windows), navigate to the theme’s Gulp folder
* Run the npm install via the included package.json. This installs gulp, sass, gulp-watcher, and gulp-autoprefixer
```
npm install
```
* Run the initial Gulp build (gulp commands are case sensitive)
```
gulp
```

### When Working on the Project

* Turn on file watch (gulp commands are case sensitive)
```
gulp sassWatch
```
* Work within the .scss files instead of the .css files
* Use ctrl+c to stop watching

* Turn on file watch (gulp commands are case sensitive)
```
gulp scriptsWatch
```
* Work within the .js files inside the /library/js/scripts/ directory
* Use ctrl+c to stop watching

### SCSS Conventions to Work With

* Include additional SCSS files with @import ‘fileName’;
* Use double slash (//) for stylesheet comments, these comments will be removed upon compiling.


# Debugging

Terminal error message: **Cannot find module 'XXXX'**

That means you forgot to run npm install, something went wrong with the install, or the package.json file is missing a module.

In Terminal/Command Line, run `npm install XXX` where XXX is the name of the module listed in the error message.

Notify the lead dev of the error so we can add the proper module to the package.json file.
