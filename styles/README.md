# SCSS Standards

These are some suggested standards for SCSS to improve code quality, consistency, modularity, and maintainability. 


### Single Line & Nesting

* Styles should be written on a single line. This goes against some git conventions, but it allows developers to more easily navigate their code and see what they are working in, particularly when it comes to nested SCSS styles.
* Nested CSS styles should only be nested if they need to be. The more nesting, the more specific and bloated the code gets.
* Nested classes should have a comment on the closing bracket to know what ends.

Example:

`.parent-class { display: flex; justify-content: center;
		.child-class-1 { width: 50px;
			.child-child-class { width: 10px; }
		}// end .child-child-class
		.child-class-2 { width: 150px; }
	}// end .parent-class`


### Class Groupings

* Class attributes should be grouped and ordered as follows: structure, sizing, colors, typography.

Example:

`.class { display: flex; justify-content: center; max-width: 200px; padding: 10px 20px; background: #fff; font-size: 2rem; }`

* Variables should be used when possible. If changing one number or color would break other instances of numbers or colors, then it should be turned into a variable.
* If a variable needs to be consistent amongst multiple files, it needs to go into a variables file. If it only needs to be used in that file, then declare it at the top of the file.
* Variables should be self explanatory, and feel free to use comments to provide additional context.


### Components

* Make sure code stays isolated to prevent messing with other sections of the website.
* Components should be named after their structure and/or functionality, not the content in them.
	* Example: full-width-cta not learn-about-our-services
* Use lots of code notes. The more you explain your code for your future self and coworkers, the better.
* Comments should not be done in a way it ends up on the end site.
	* Use // so it gets compiled out.
