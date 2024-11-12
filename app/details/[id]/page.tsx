import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { sql } from '@vercel/postgres'
import { notFound } from 'next/navigation'

async function getMessage(id: string) {
  const { rows } = await sql`SELECT * FROM love_messages WHERE id = ${id}`
  if (rows.length === 0) return null
  return rows[0]
}

export default async function DetailsPage({ params }: { params: { id: string } }) {
  const message = await getMessage(params.id)

  if (!message) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-pink-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-pink-600 mb-4">Love Message Details</h1>
        <div className="space-y-4">
          <p><strong>Recipient:</strong> {message.recipient_name}</p>
          <p><strong>Message:</strong> {message.message}</p>
          <p><strong>Love Intensity:</strong> {message.love_intensity}%</p>
          <p><strong>Date Submitted:</strong> {new Date(message.date_submitted).toLocaleString()}</p>
        </div>
        <Button asChild className="mt-8 w-full">
          <Link href="/browse">Back to Browse</Link>
        </Button>
      </div>
    </div>
  )
}
