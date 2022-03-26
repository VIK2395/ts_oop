export {};

/* Attach new behaviors to objects without altering its structure by placing these objects inside 
wrapper objects that provide the additional behaviors */

/* Can be achived with functions and closures as well */

// https://refactoring.guru/design-patterns/decorator
// https://www.youtube.com/watch?v=v6tpISNjHf8&list=PLlsmxlJgn1HJpa28yHzkBmUY-Ty71ZUGc&index=20

type Data = string;

interface IDataSource {
  write(data: Data): void;
  read(): Data;
}

class FileDataSource implements IDataSource {
  private readonly filename: string;
  private data: Data;

  constructor(filename: string) {
    this.filename = filename;
  }

  write(data: Data): void {
    this.data = data;
  }

  read(): Data {
    return this.data;
  }
}

abstract class BaseDataSourceDecorator implements IDataSource {
  private readonly wrapped: IDataSource;

  constructor(source: IDataSource) {
    this.wrapped = source;
  }

  write(data: Data): void {
    this.wrapped.write(data);
  }

  read(): Data {
    return this.wrapped.read();
  }
}

class EncryptionDecorator extends BaseDataSourceDecorator {
  write(data: Data): void {
    const encriptedData: Data = `ENCRIPTED_%%%%${data}%%%%`;
    super.write(encriptedData); // this.write(encriptedData) => cause an infinite loop
  }

  read(): Data {
    const encriptedData: Data = super.read();
    const decripedData: Data = encriptedData.slice(14, -4);
    return decripedData;
  }
}

class CompressionDecorator extends BaseDataSourceDecorator {
  write(data: string): void {
    const compressedData: Data = `COMPRESSED_${data}`;
    super.write(compressedData);
  }

  read(): Data {
    const compressedData: Data = super.read();
    const decompressedData: Data = compressedData.slice(11);
    return decompressedData;
  }
}

const source1 = new CompressionDecorator(new EncryptionDecorator(new FileDataSource('file1.txt')));

source1.write('Source1:: Hello world!');

console.log(source1);
console.log(source1.read());

console.log();

// Polymorphism => IDataSource common for all classes
let source2: IDataSource = new FileDataSource('file2.txt');
source2 = new EncryptionDecorator(source2);
source2 = new CompressionDecorator(source2);

source2.write('Source2:: Hello world!');

console.log(source2);
console.log(source2.read());
