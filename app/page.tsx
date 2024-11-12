import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50">
      <h1 className="text-4xl font-bold text-pink-600 mb-8">Love Messages</h1>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/submit">Create Message</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/browse">Browse Messages</Link>
        </Button>
      </div>
    </div>
  )
}
