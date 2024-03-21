import React from 'react'

export default function StoryImage({ image }: { image: string }) {
  return (
    <div className="lg:w-1/2 bg-cover bg-center h-64 lg:h-auto" style={{ backgroundImage: `url(${image})` }}></div>
  )
}
