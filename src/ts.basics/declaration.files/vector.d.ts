// .d.ts files must be in src folder, otherwise there is an error:

/* Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.
The file does not match your project config: example-vector3.d.ts.
The file must be included in at least one of the projects provided. eslint */

// Use declare namespace to describe types or values accessed by dotted notation.
// https://www.typescriptlang.org/docs/handbook/declaration-files/by-example.html

declare namespace vector {
  // Even without 'export' keyword works; 'declare' keyword makes it work.
  /* export */ class Vector3 {
    constructor(x: number, y: number, z: number);
    add(vector: Vector3): Vector3;
  }

  /* export */ class Vector4 {
    constructor(a: number, b: number, c: number);
    subtract(vector: Vector4): Vector4;
  }
}

// Only export default accessible in .d.ts files.
// The export = syntax specifies a single object that is exported from the module.
// This can be a class, interface, namespace, function, or enum.
// https://www.typescriptlang.org/docs/handbook/modules.html

export = vector; // syntax equal to 'export default vector'
