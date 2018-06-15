## How to add packages like jQuery and Bootstrp in Angular

1. run `npm install [package-name] --save`

2. in file `angular.json`,

	- add your css file in `"styles: []"`

	- add your js file in `"scripts: []"`

3. run `npm install @types/[package-name] --save-dev`


**Tips:** 

When installing Bootstrap 4 in Angular 6,  we need popper.js. However, there is no need to run

`npm install @types/popper.js --save-dv` 

because it reminds that 
 > popper.js provides its own type definitions, so you don't need @types/popper.js installed!

 _--- to be continued ---_