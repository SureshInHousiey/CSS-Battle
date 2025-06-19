import { NextRequest, NextResponse } from 'next/server';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';

export async function POST(req: NextRequest) {
  const { target, user } = await req.json();

  const decode = (base64: string): PNG => {
    const buffer = Buffer.from(base64.replace(/^data:image\/png;base64,/, ''), 'base64');
    return PNG.sync.read(buffer);
  };

  try {
    const img1 = decode(target);
    const img2 = decode(user);

    const { width, height } = img1;

    const diff = new PNG({ width, height });

    const mismatchedPixels = pixelmatch(
      img1.data,
      img2.data,
      diff.data,
      width,
      height,
      { threshold: 0.1 }
    );

    const totalPixels = width * height;
    const accuracy = ((1 - mismatchedPixels / totalPixels) * 100).toFixed(2);

    return NextResponse.json({ accuracy });
  } catch (error) {
    return NextResponse.json({ error: `Comparison failed: ${error}` }, { status: 500 });
  }
}
