'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"

type Musician = {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

type Comment = {
  id: number;
  author: string;
  content: string;
  date: string;
}

const musicians: Musician[] = [
  { id: 1, name: "Juan Pérez", role: "Vocalista", bio: "Juan es el carismático vocalista principal de la banda...", image: "/placeholder.svg?height=400&width=400" },
  { id: 2, name: "María García", role: "Guitarrista", bio: "María es una virtuosa guitarrista con años de experiencia...", image: "/placeholder.svg?height=400&width=400" },
  { id: 3, name: "Carlos Rodríguez", role: "Baterista", bio: "Carlos es el corazón rítmico de la banda...", image: "/placeholder.svg?height=400&width=400" },
  { id: 4, name: "Ana Martínez", role: "Bajista", bio: "Ana proporciona los graves que hacen vibrar al público...", image: "/placeholder.svg?height=400&width=400" },
]

export function StaffPage() {
  const [selectedMusician, setSelectedMusician] = useState<Musician | null>(null)
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [donationAmount, setDonationAmount] = useState('')

  const handleOpenModal = (musician: Musician) => {
    setSelectedMusician(musician)
    // En una aplicación real, aquí cargarías los comentarios del músico desde una API
    setComments([
      { id: 1, author: "Fan1", content: "¡Increíble talento!", date: "2024-03-15" },
      { id: 2, author: "Fan2", content: "Tu música me inspira", date: "2024-03-16" },
    ])
  }

  const handleCloseModal = () => {
    setSelectedMusician(null)
    setComments([])
    setNewComment('')
    setDonationAmount('')
  }

  const handleAddComment = () => {
    if (newComment.trim()) {
      const newCommentObj: Comment = {
        id: comments.length + 1,
        author: "Usuario",
        content: newComment,
        date: new Date().toISOString().split('T')[0]
      }
      setComments([...comments, newCommentObj])
      setNewComment('')
    }
  }

  const handleDonate = () => {
    if (donationAmount && selectedMusician) {
      alert(`Gracias por tu donación de $${donationAmount} a ${selectedMusician.name}!`)
      setDonationAmount('')
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Nuestros Músicos</h1>
      
      <Carousel className="w-full max-w-xs mx-auto sm:max-w-2xl md:max-w-4xl">
        <CarouselContent className="-ml-1">
          {musicians.map((musician) => (
            <CarouselItem key={musician.id} className="pl-1 sm:basis-1/2 md:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <Avatar className="w-full h-full" onClick={() => handleOpenModal(musician)}>
                      <AvatarImage src={musician.image} alt={musician.name} />
                      <AvatarFallback>{musician.name[0]}</AvatarFallback>
                    </Avatar>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Dialog open={!!selectedMusician} onOpenChange={() => handleCloseModal()}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{selectedMusician?.name}</DialogTitle>
            <DialogDescription>{selectedMusician?.role}</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <p>{selectedMusician?.bio}</p>
            <h3 className="font-semibold">Comentarios de fans</h3>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              {comments.map((comment) => (
                <div key={comment.id} className="mb-4">
                  <p className="font-semibold">{comment.author} <span className="font-normal text-sm text-gray-500">({comment.date})</span></p>
                  <p>{comment.content}</p>
                </div>
              ))}
            </ScrollArea>
            <Textarea
              placeholder="Deja tu comentario..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <Button onClick={handleAddComment}>Agregar Comentario</Button>
            <div className="flex items-center space-x-2">
              <Input
                type="number"
                placeholder="Cantidad a donar"
                value={donationAmount}
                onChange={(e) => setDonationAmount(e.target.value)}
              />
              <Button onClick={handleDonate}>Donar</Button>
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleCloseModal}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}