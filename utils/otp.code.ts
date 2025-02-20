import dotenv from 'dotenv';
import base32Decode from 'base32-decode';
import { createHmac } from 'crypto';

dotenv.config();

const KEY = process.env.KEY;
if (!KEY) {
  throw new Error('KEY env var was not found');
}

export function generateOtpCode(): string {
  return totp(KEY!); 
}

function totp(key: string): string {
  const X = 30; // 30-секундный таймаут
  const K = Buffer.from(base32Decode(key, 'RFC3548'));
  return hotp(K, numberToBytes(Math.floor(Date.now() / 1000 / X)));
}


function hotp(K: Buffer, C: Buffer): string {
  const HS = createHmac("sha1", K).update(C).digest();
  const offset = HS[19] & 0xf;
  const code =
    ((HS[offset] & 0x7f) << 24) |
    ((HS[offset + 1] & 0xff) << 16) |
    ((HS[offset + 2] & 0xff) << 8) |
    (HS[offset + 3] & 0xff);
  return (code % 10 ** 6).toString().padStart(6, "0");
}


function numberToBytes(n: number): Buffer {
  const buf = Buffer.alloc(8);
  buf.writeUInt32BE(n, 4);
  return buf;
}