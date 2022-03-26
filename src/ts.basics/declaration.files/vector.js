/* 'module' declarations can only be used in TypeScript files. ts(8006) */

/* export */ class Vector3 {
  super(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  add(vector) {
    const x = this.x + vector.x;
    const y = this.y + vector.y;
    const z = this.z + vector.z;

    return new Vector3(x, y, z);
  }
}

/* export */ class Vector4 {
  super(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  subtract(vector) {
    const a = this.a - vector.a;
    const b = this.b - vector.b;
    const c = this.c - vector.c;

    return new Vector4(a, b, c);
  }
}

// common.js and es6 exports can be used interchangeably in .js files.
module.exports = { Vector3, Vector4 }; // named exports
// module.exports = Vector3; // default export; any name possible when importing
