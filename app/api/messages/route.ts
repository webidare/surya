import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { rows } = await sql`SELECT * FROM love_messages ORDER BY date_submitted DESC`;
    return NextResponse.json(rows);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const { recipientName, message, loveIntensity } = await request.json();
    const { rows } = await sql`
      INSERT INTO love_messages (recipient_name, message, love_intensity)
      VALUES (${recipientName}, ${message}, ${loveIntensity})
      RETURNING *
    `;
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit message' }, { status: 500 });
  }
}
