/* This module can only be referenced with ECMAScript imports/exports by
turning on the 'esModuleInterop' flag and referencing its default export. ts(2497) */

import { Vector3, Vector4 } from './vector';

const v1 = new Vector3(1, 2, 3);
const v2 = new Vector3(1, 2, 3);

const v3 = v1.add(v2);

const y1 = new Vector4(1, 2, 3);
const y2 = new Vector4(1, 2, 3);

const y3 = y1.subtract(y2);

console.log(v3);
console.log(y3);
