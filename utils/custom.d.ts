declare module 'base32-decode' {
    function decode(input: string, encoding: string): Buffer;
    export = decode;
  }