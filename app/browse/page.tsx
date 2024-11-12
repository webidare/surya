import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { sql } from '@vercel/postgres'

async function getMessages() {
  const { rows } = await sql`SELECT * FROM love_messages ORDER BY date_submitted DESC`
  return rows
}

export default async function BrowsePage() {
  const messages = await getMessages()

  return (
    <div className="min-h-screen bg-pink-50 p-8">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">Browse Love Messages</h1>
      <div className="space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="bg-white p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold text-pink-600">{message.recipient_name}</h2>
            <p className="text-gray-600 mt-2">{message.message}</p>
            <div className="mt-2 text-sm text-gray-500">
              Love Intensity: {message.love_intensity}% | Date: {new Date(message.date_submitted).toLocaleDateString()}
            </div>
            <Button asChild className="mt-4">
              <Link href={`/details/${message.id}`}>View Details</Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}
