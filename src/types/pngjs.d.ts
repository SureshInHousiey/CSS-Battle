/* eslint-disable @typescript-eslint/no-explicit-any */
declare module 'pngjs' {
  import { Readable } from 'stream';

  export class PNG {
    static sync: {
      read(buffer: Buffer): PNG;
      write(png: PNG): Buffer;
    };

    constructor(options?: {
      width?: number;
      height?: number;
      filterType?: number;
    });

    width: number;
    height: number;
    data: Buffer;

    on(event: 'metadata', callback: (metadata: any) => void): void;
    on(event: 'parsed', callback: () => void): void;
    on(event: string, callback: (...args: any[]) => void): void;

    pack(): Readable;
    parse(data: Buffer, callback: (err: Error | null, png: PNG) => void): void;
  }
}
