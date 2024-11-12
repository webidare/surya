'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Slider } from '@/components/ui/slider'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { Toaster } from '@/components/ui/toaster'

export default function SubmitPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [recipientName, setRecipientName] = useState('')
  const [message, setMessage] = useState('')
  const [loveIntensity, setLoveIntensity] = useState(50)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ recipientName, message, loveIntensity }),
      })
      if (!response.ok) throw new Error('Failed to submit message')
      const data = await response.json()
      toast({
        title: "Message submitted!",
        description: "Your love message has been sent successfully.",
      })
      router.push(`/details/${data.id}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-pink-50 p-4">
      <h1 className="text-3xl font-bold text-pink-600 mb-8">Create Love Message</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
        <div className="space-y-2">
          <Label htmlFor="recipientName">Recipient Name</Label>
          <Input
            id="recipientName"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Love Message</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="loveIntensity">Love Intensity</Label>
          <Slider
            id="loveIntensity"
            min={0}
            max={100}
            step={1}
            value={[loveIntensity]}
            onValueChange={(value) => setLoveIntensity(value[0])}
          />
          <div className="text-center text-sm text-pink-600">{loveIntensity}%</div>
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Love'}
        </Button>
      </form>
      <Toaster />
    </div>
  )
}
