/* eslint-disable @typescript-eslint/no-unused-vars */
export {};

interface IGenericInterface<T extends { length: number }> {
  // T extends ... => apply constrains when declarating.
  field: T;
}

type TypeParameterForGeneric = {
  length: number;
};

// Type intersection here
const typeParameterPassed: IGenericInterface<TypeParameterForGeneric & { booleanField: boolean }> =
  {
    // All consruction till comma is placed insted of Type Parameter.
    // Intersection works here; this proves that Type Parameters is type alias.
    field: {
      length: 27,
      booleanField: true,
    },
  };

interface ITypeParameterForGeneric {
  length: number;
}

const interfaceParameterPassed: IGenericInterface<
  // T extends ... => apply Conditional Types when implementing.
  ITypeParameterForGeneric extends { booleanField: boolean }
    ? { length: number; booleanField: boolean }
    : { length: number; stringField: string }
  // Shows that Generic Type Parameters are type aliases at first place, not interfaces.
  // Interfaces do not provide conditional types functionality.
> = {
  field: {
    length: 27,
    stringField: 'lalala',
  },
};
