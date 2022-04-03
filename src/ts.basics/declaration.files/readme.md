Declaration files:  
https://stackoverflow.com/questions/43335962/purpose-of-declare-keyword-in-typescript  
https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html

**_ DO NOT USE NAMESPACES IN MODULES _**

When first moving to a module-based organization, a common tendency is to wrap exports in an additional layer of namespaces. **_ Modules have their own scope, and only exported declarations are visible from outside the module. _** With this in mind, namespace provide very little, if any, value when working with modules.

**_ export = _** is also in the source.

Source: https://www.typescriptlang.org/docs/handbook/modules.html

Note that using export default in your .d.ts files requires esModuleInterop: true to work. If you can’t have esModuleInterop: true in your project, such as when you’re submitting a PR to Definitely Typed, you’ll have to use the export= syntax instead. This older syntax is harder to use but works everywhere.

Source: https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html

Useful links:  
How To Use Namespaces in TypeScript  
https://www.digitalocean.com/community/tutorials/how-to-use-namespaces-in-typescript

Adding TypeScript declarations to vanilla JavaScript  
https://www.youtube.com/watch?v=sy3wISB7Wgw
